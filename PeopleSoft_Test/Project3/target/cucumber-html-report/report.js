$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JenkinsTest.feature");
formatter.feature({
  "line": 2,
  "name": "Jenkins related scenarios",
  "description": "",
  "id": "jenkins-related-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JenkinsTest"
    }
  ]
});
formatter.before({
  "duration": 1016288,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Click on link 1",
  "description": "",
  "id": "jenkins-related-scenarios;click-on-link-1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user 1 is login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on link 1",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "TC1 is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    }
  ],
  "location": "Jenkins.user_is_login(int)"
});
formatter.result({
  "duration": 220867484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "Jenkins.user_clicks_on_link(int)"
});
formatter.result({
  "duration": 4244328,
  "error_message": "java.lang.AssertionError: fail\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.ingcapgemini.wm.story.leave.Jenkins.user_clicks_on_link(Jenkins.java:27)\r\n\tat ✽.When user clicks on link 1(JenkinsTest.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 2
    }
  ],
  "location": "Jenkins.tc_is_successful(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 384957,
  "status": "passed"
});
formatter.before({
  "duration": 778780,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Click on link 2",
  "description": "",
  "id": "jenkins-related-scenarios;click-on-link-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user 2 is login",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on link 2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "TC2 is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "Jenkins.user_is_login(int)"
});
formatter.result({
  "duration": 863238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "Jenkins.user_clicks_on_link(int)"
});
formatter.result({
  "duration": 1002289,
  "error_message": "java.lang.AssertionError: fail\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.ingcapgemini.wm.story.leave.Jenkins.user_clicks_on_link(Jenkins.java:27)\r\n\tat ✽.When user clicks on link 2(JenkinsTest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 2
    }
  ],
  "location": "Jenkins.tc_is_successful(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 336430,
  "status": "passed"
});
formatter.before({
  "duration": 761049,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Click on link 3",
  "description": "",
  "id": "jenkins-related-scenarios;click-on-link-3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user 3 is login",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user clicks on link 3",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "TC3 is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 5
    }
  ],
  "location": "Jenkins.user_is_login(int)"
});
formatter.result({
  "duration": 774581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "Jenkins.user_clicks_on_link(int)"
});
formatter.result({
  "duration": 1228130,
  "error_message": "java.lang.AssertionError: fail\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.ingcapgemini.wm.story.leave.Jenkins.user_clicks_on_link(Jenkins.java:27)\r\n\tat ✽.When user clicks on link 3(JenkinsTest.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 2
    }
  ],
  "location": "Jenkins.tc_is_successful(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 293968,
  "status": "passed"
});
});