package com.sjsu.twitterdemonstration.service;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

/**
 * @author Limeka
 *To validate the input data
 *
 */
@Service
public class TwitterService {
	

	/**
	 * @param hashtag
	 * @param message
	 * @param environment
	 * @return
	 */
	public boolean retrieveTweet(String hashtag, String message,Environment environment) {
		
		if(hashtag.length()==0) {
			message = environment.getProperty("TwitterController.VALIDATE_RETRIEVE");
			return false;
		}
		message = environment.getProperty("TwitterController.SUCCESSFUL_RETRIEVE");
		System.out.println(message);
		return true;
	}
	
	/**
	 * @param status
	 * @param message
	 * @param environment
	 * @return
	 */
	public boolean createTweet(String status, String message,Environment environment) {
		
		if(status.length()==0) {
			message = environment.getProperty("TwitterController.VALIDATE_CREATE");
			return false;
		}
		
		message = environment.getProperty("TwitterController.SUCCESSFUL_CREATE");
		System.out.println(message);
		return true;
	}
	
	/**
	 * @param tweetId
	 * @param message
	 * @param environment
	 * @return
	 */
	public boolean deleteTweet(Long tweetId, String message,Environment environment) {
		
		if(tweetId==0L) {
			message = environment.getProperty("TwitterController.VALIDATE_DELETE");
			return false;
		}
		message = environment.getProperty("TwitterController.SUCCESSFUL_DELETE");
		System.out.println(message);
		return true;
	}

}
