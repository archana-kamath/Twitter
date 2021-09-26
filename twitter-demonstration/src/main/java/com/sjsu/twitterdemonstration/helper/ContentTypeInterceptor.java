package com.sjsu.twitterdemonstration.helper;
import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED;

import java.io.IOException;

import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;


/**
 * @author archa - Archana
 * To change the content type
 */
public class ContentTypeInterceptor implements ClientHttpRequestInterceptor {
	@Override
	public ClientHttpResponse intercept( HttpRequest aRequest, byte[] aBody, ClientHttpRequestExecution aExecution )
	throws IOException {
		aRequest.getHeaders().setContentType(APPLICATION_FORM_URLENCODED); return aExecution.execute(aRequest, aBody);
	}
}
