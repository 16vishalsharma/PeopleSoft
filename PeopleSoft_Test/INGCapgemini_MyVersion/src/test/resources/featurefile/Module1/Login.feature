@Login
Feature: Check login relagted scenarios

@LoginAndLogout
Scenario: login to http://automationpractice.com/index.php..simple scenario with one set of argument--Admin user
Given User enter the  application url
When User enter the username "admin@p.com" and password "Password-11" and click on Submit button
Then Verify that user is able to login into the application
When User clicks on LogOut button
Then user should be successfully logged out of the application


