package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageHelper.PaginationHelper;
import utilities.Config;

public class PageCountSteps {
    PaginationHelper helper;

    @Given("an array and integer value for count of page")
    public void an_array_and_integer_value_for_count_of_page() {
        double d = Double.parseDouble(Config.getProperties("page"));
        helper = new PaginationHelper( new char[]{'a','b','c','d','e','f'},d);
    }

    @When("method runs")
    public void method_runs() {
        System.out.println(helper.pageCount());
    }

    @Then("actual count result must be equal to the expected count")
    public void actual_count_result_must_be_equal_to_the_expected_count() {
        int i = Integer.parseInt(Config.getProperties("expectedPageCount"));
        Assert.assertEquals(helper.pageCount(),i);
    }
}
