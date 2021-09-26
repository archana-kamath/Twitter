package com.sjsu.twitterdemonstration.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sjsu.twitterdemonstration.helper.ContentTypeInterceptor;
import com.sjsu.twitterdemonstration.service.TwitterService;

/**
 * @author archa - Archana
 * This class calls the twitter API
 */
@RestController
@RequestMapping("/twitter-demonstration")
@CrossOrigin(origins="http://localhost:3000")
public class TwitterController {
		
	@Autowired
	private TwitterService twitterService;
	
	@Autowired
	private Environment environment;

	// Enter the below details from your twitter developer account
	String consumerKey = "";                             
	String consumerSecret = ""; 
	String accessToken = "";    
	String accessTokenSecret = "";  

	
	TwitterTemplate myTwitter = new TwitterTemplate(consumerKey, consumerSecret, accessToken, accessTokenSecret);
	
	/**
	 * @param hashtag
	 * @return
	 */
	@RequestMapping(value="/retrieve/{hashtag}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Tweet> retrieveTweet(@PathVariable("hashtag") String hashtag) {
		String message = "";
		List<Tweet> myTweets = new ArrayList<Tweet>();
		
		try {
			
			if(twitterService.retrieveTweet(hashtag, message,environment)) {
				myTweets = myTwitter.searchOperations().search(hashtag,20).getTweets();
			}
		}catch(Exception exception) {
			environment.getProperty("TwitterController.EXCEPTION_RETRIEVE");
		}
	
		return myTweets;
	}
	
	
	/**
	 * @param myStatus
	 * @return
	 */
	@RequestMapping(value="/create/{status}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Tweet createTweet(@PathVariable("status")String myStatus) {
	
		String message = "";
		Tweet myTweet = null;
		
		try {
			if(twitterService.createTweet(myStatus, message,environment)) {
				
				myTwitter.getRestTemplate().getInterceptors().add (0, new ContentTypeInterceptor());
				myTweet = myTwitter.timelineOperations().updateStatus(myStatus);
			}
		}catch(Exception exception) {
			environment.getProperty("TwitterController.EXCEPTION_CREATE");
		}
	
		return myTweet;
	}

	/**
	 * @param tweetId
	 * @return
	 */
	@RequestMapping(value="/delete/{tweetId}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public String deleteTweet(@PathVariable("tweetId")String tweetId) {

		Long mytweetId = Long.parseLong(tweetId) ;
		String message = "";
		
		try {
			if(twitterService.deleteTweet(mytweetId,message,environment)) {
				
				myTwitter.getRestTemplate().getInterceptors().add (0, new ContentTypeInterceptor());
				myTwitter.timelineOperations().deleteStatus(mytweetId);
			}
			
		}catch(Exception exception) {
			environment.getProperty("TwitterController.EXCEPTION_DELETE");
		}
		return "Delete successful";
		
	}

}
