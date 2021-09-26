package com.sjsu.twitterdemonstration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

/**
 * @author archa - Archana
 *
 */
@SpringBootApplication
@ComponentScan({"org.springframework.social.twitter.api","com.sjsu.twitterdemonstration"})
@PropertySource(value = {"classpath:configuration.properties","classpath:application.properties"})

public class TwitterDemonstrationApplication {
	public static void main(String[] args) {
		SpringApplication.run(TwitterDemonstrationApplication.class, args);
	}

}
