package com.ingcapgemini.wm.story.leave;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;

import com.ingcapgemini.wm.common.GlobalStepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Jenkins {
	private static final Logger LOGGER=LogManager.getLogger(GlobalStepDefinition.class);
	@Given("^user (\\d+) is login$")
	public void user_is_login(int arg1) throws Throwable {
		LOGGER.info("Inside user_is_login "+arg1);
		
	    // Write code here that turns the phrase above into concrete actions
	   	}

	@When("^user clicks on link (\\d+)$")
	public void user_clicks_on_link(int arg1) throws Throwable {
		LOGGER.info("Inside user_clicks_on_link "+arg1);
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue("fail",false);
	  
	}

	@Then("^TC(\\d+) is successful$")
	public void tc_is_successful(int arg1) throws Throwable {
		LOGGER.info("Inside tc_is_successful "+arg1);
	    // Write code here that turns the phrase above into concrete actions
	 
	}

}
