@PageItemCount
Feature: Count the items according to pages

  Scenario: This test count of the items in first page
    Given an array and integer value for page items
    When print result for items count in first page
    Then actual count result must be equal to the expected count for first page

  Scenario: This test count of the items in second page
    Given an array and integer value for page items
    When print result for items count in second page
    Then actual count result must be equal to the expected count for second page

  Scenario: This scenario does test to the out of range values
    Given an array and integer value for page items
    When print result for invalid value
    Then actual result must be equal -1