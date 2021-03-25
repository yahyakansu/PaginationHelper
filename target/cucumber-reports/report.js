$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pageItemCount.feature");
formatter.feature({
  "name": "Count the items according to pages",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PageItemCount"
    }
  ]
});
formatter.scenario({
  "name": "This test count of the items in first page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageItemCount"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for count of page for page item count for page items",
  "keyword": "Given "
});
formatter.match({
  "location": "PageItemCount.an_array_and_integer_value_for_count_of_page_for_page_item_count_for_page_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for items count in first page",
  "keyword": "When "
});
formatter.match({
  "location": "PageItemCount.print_result_for_items_count_in_first_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected count for first page",
  "keyword": "Then "
});
formatter.match({
  "location": "PageItemCount.actual_count_result_must_be_equal_to_the_expected_count_for_first_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This test count of the items in second page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageItemCount"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for count of page for page item count for page items",
  "keyword": "Given "
});
formatter.match({
  "location": "PageItemCount.an_array_and_integer_value_for_count_of_page_for_page_item_count_for_page_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for items count in second page",
  "keyword": "When "
});
formatter.match({
  "location": "PageItemCount.print_result_for_items_count_in_second_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected count for second page",
  "keyword": "Then "
});
formatter.match({
  "location": "PageItemCount.actual_count_result_must_be_equal_to_the_expected_count_for_second_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario does test to the out of range values",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PageItemCount"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for count of page for page item count for page items",
  "keyword": "Given "
});
formatter.match({
  "location": "PageItemCount.an_array_and_integer_value_for_count_of_page_for_page_item_count_for_page_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for invalid value",
  "keyword": "When "
});
formatter.match({
  "location": "PageItemCount.print_result_for_invalid_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual result must be equal -1",
  "keyword": "Then "
});
formatter.match({
  "location": "PageItemCount.actual_result_must_be_equal(Integer)"
});
formatter.result({
  "status": "passed"
});
});