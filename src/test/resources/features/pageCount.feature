@All
Feature: Count of the page

  Scenario: This test calculate the page count with in the array
    Given an array and integer value for count of page
    When method runs
    Then actual count result must be equal to the expected count