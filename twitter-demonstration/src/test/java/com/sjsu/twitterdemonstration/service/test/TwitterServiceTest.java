package com.sjsu.twitterdemonstration.service.test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.sjsu.twitterdemonstration.TwitterDemonstrationApplication;
import com.sjsu.twitterdemonstration.service.TwitterService;

/**
 * @author Limeka
 *
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { TwitterDemonstrationApplication.class })
@PropertySource(value = {"classpath:configuration.properties","classpath:application.properties"})
@SpringBootTest
class TwitterServiceTest {
	
	@Autowired
	TwitterService twitterService;
	
	@Autowired
	Environment environment;
	
	@Test
	void testCreateService() {
		twitterService.createTweet("Hello SJSU", "", environment);
	}
	
	@Test
	void testRetrieveService() {
		twitterService.retrieveTweet("SJSU", "", environment);
	}
	
	@Test
	void testDeleteService() {
		Assertions.assertFalse(twitterService.deleteTweet(0L, "", environment));
	}
}
