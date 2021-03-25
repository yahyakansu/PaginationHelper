$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/itemCount.feature");
formatter.feature({
  "name": "Count of the items in the array",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ItemCount"
    }
  ]
});
formatter.scenario({
  "name": "This test count all items in the array",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ItemCount"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for count of items",
  "keyword": "Given "
});
formatter.match({
  "location": "ItemCountSteps.an_array_and_integer_value_for_count_of_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print result for items count",
  "keyword": "When "
});
formatter.match({
  "location": "ItemCountSteps.print_result_for_items_count()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected count for count of items",
  "keyword": "Then "
});
formatter.match({
  "location": "ItemCountSteps.actual_count_result_must_be_equal_to_the_expected_count_for_count_of_items()"
});
formatter.result({
  "status": "passed"
});
});