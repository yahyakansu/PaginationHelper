$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pageCount.feature");
formatter.feature({
  "name": "Count of the page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "name": "This test calculate the page count with in the array",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.step({
  "name": "an array and integer value for count of page",
  "keyword": "Given "
});
formatter.match({
  "location": "PageCountSteps.an_array_and_integer_value_for_count_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "method runs",
  "keyword": "When "
});
formatter.match({
  "location": "PageCountSteps.method_runs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actual count result must be equal to the expected count",
  "keyword": "Then "
});
formatter.match({
  "location": "PageCountSteps.actual_count_result_must_be_equal_to_the_expected_count()"
});
formatter.result({
  "status": "passed"
});
});