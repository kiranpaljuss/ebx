Feature: 01 Requesting Authors of Commits
  
  Scenario: 01 Owner and repo exists on GitHub
    When requesting a list of commits from owner "Call-for-Code" and repo "Project-Sample"
    Then return the authors of the last 30 commits in the given repo

  Scenario: 02 Owner or repo does not exist on GitHub
    When requesting a list of commits from owner "Call-for-Codes" and repo "Project-Samples"
    Then status is "404"
    And message body is "Not Found"