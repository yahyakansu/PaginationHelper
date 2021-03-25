@PageIndex
Feature: Count the items remaining to the last page

  Scenario: This test shows how many item are remaining within range
    Given an array and integer value for page index
    When print result for valid value with remainder
    Then actual count result must be equal to the expected result for valid value with remainder

  Scenario: This test shows how many item are remaining without range
    Given an array and integer value for page index
    When print result for valid value without remainder
    Then actual count result must be equal to the expected result for valid value without remainder

  Scenario: This test shows out of range for page index
    Given an array and integer value for page index
    When print result for out of range value
    Then actual count result must be equal to the expected result for out of range value

  Scenario: This test shows negative for page index
    Given an array and integer value for page index
    When print result for negative value
    Then actual count result must be equal to the expected result for negative value