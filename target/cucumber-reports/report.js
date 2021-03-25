$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pageIndex.feature");
formatter.feature({
  "name": "Count the items remaining to the last page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PageIndex"
    }
  ]
});
formatter.scenario({
  "name": "This test shows how many item are remaining within range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageIndex"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for page index",
  "keyword": "Given "
});
formatter.match({
  "location": "PageIndexSteps.an_array_and_integer_value_for_page_index()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for valid value with remainder",
  "keyword": "When "
});
formatter.match({
  "location": "PageIndexSteps.print_result_for_valid_value_with_remainder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected result for valid value with remainder",
  "keyword": "Then "
});
formatter.match({
  "location": "PageIndexSteps.actual_count_result_must_be_equal_to_the_expected_result_for_valid_value_with_remainder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This test shows how many item are remaining without range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageIndex"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for page index",
  "keyword": "Given "
});
formatter.match({
  "location": "PageIndexSteps.an_array_and_integer_value_for_page_index()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for valid value without remainder",
  "keyword": "When "
});
formatter.match({
  "location": "PageIndexSteps.print_result_for_valid_value_without_remainder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected result for valid value without remainder",
  "keyword": "Then "
});
formatter.match({
  "location": "PageIndexSteps.actual_count_result_must_be_equal_to_the_expected_result_for_valid_value_without_remainder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This test shows out of range for page index",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageIndex"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for page index",
  "keyword": "Given "
});
formatter.match({
  "location": "PageIndexSteps.an_array_and_integer_value_for_page_index()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for out of range value",
  "keyword": "When "
});
formatter.match({
  "location": "PageIndexSteps.print_result_for_out_of_range_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected result for out of range value",
  "keyword": "Then "
});
formatter.match({
  "location": "PageIndexSteps.actual_count_result_must_be_equal_to_the_expected_result_for_out_of_range_value()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This test shows negative for page index",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageIndex"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for page index",
  "keyword": "Given "
});
formatter.match({
  "location": "PageIndexSteps.an_array_and_integer_value_for_page_index()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for negative value",
  "keyword": "When "
});
formatter.match({
  "location": "PageIndexSteps.print_result_for_negative_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected result for negative value",
  "keyword": "Then "
});
formatter.match({
  "location": "PageIndexSteps.actual_count_result_must_be_equal_to_the_expected_result_for_negative_value()"
});
formatter.result({
  "status": "passed"
});
});