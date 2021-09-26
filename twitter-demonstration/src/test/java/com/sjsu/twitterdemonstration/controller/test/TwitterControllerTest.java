package com.sjsu.twitterdemonstration.controller.test;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.sjsu.twitterdemonstration.TwitterDemonstrationApplication;
import com.sjsu.twitterdemonstration.controller.TwitterController;

/**
 * @author Limeka
 *
 */
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { TwitterDemonstrationApplication.class })
@PropertySource(value = {"classpath:configuration.properties","classpath:application.properties"})
@SpringBootTest
class TwitterControllerTest {
	
	@Autowired
	TwitterController controller;

	@Test
	void testRetrieve() {
		controller.retrieveTweet("SJSU");
	}
	
	@Test
	void testCreate() {
		controller.createTweet("My Tweet");
	}
	
	@Test
	void testDelete() {
		controller.deleteTweet("0");
	}
}
