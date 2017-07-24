package com.ingcapgemini.wm.action;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.ingcapgemini.wm.util.SeleniumUtil;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/featurefile", tags = { "@JenkinsTest" }, plugin = {
		"pretty", "html:target/cucumber-html-report",
		"json:target/cucumber.json", "junit:target/cucumber.xml" ,"rerun:target/rerun.txt" }, glue = { "com.ingcapgemini" } )
//html:target/cucumber-html-report - for generating normal html report..generated by cucumber..geneated without any plugin
//json:target/cucumber.json - eclipse refers cucumber.json to generate  generating fancy reporting-JVM report..generated by maven
//FOR
/*@CucumberOptions(features = {"@target/rerun.txt"}, plugin = {
		"pretty", "html:target/cucumber-html-report",
		"json:target/cucumber.json", "junit:target/cucumber.xml",
		"usage:target/cucumber-usage.json" ,"rerun:target/rerun.txt" }, glue = { "com.ingcapgemini" } )*/

public class TestRunner {
	
	@BeforeClass
	public static void beforeClass(){ //For BeforeClass annotation static is compulsory because JVM calls it directly

		if(System.getProperty("Browser")==null){
			System.setProperty("Browser", "ie");
			
		}
		if(System.getProperty("ENV")==null){
			System.setProperty("ENV", "SIT");
			
		}
		//##################### FOR DRIVER #######################################
		SeleniumUtil.initializeSeleniumConnector();
		
		SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd hh-mm-ss");
		System.setProperty("currentdate", dateFormat.format(new Date()));
		SeleniumUtil.cleanFolder(1, "Logs");//delete all except todays
		
	}
	
	@AfterClass
	public static void afterClass(){
		
	}

}
