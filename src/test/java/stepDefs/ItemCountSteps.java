package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageHelper.PaginationHelper;
import utilities.Config;

public class ItemCountSteps {
    PaginationHelper helper;

    @Given("an array and integer value for count of page for count of items")
    public void an_array_and_integer_value_for_count_of_page_for_count_of_items() {
        double d = Double.parseDouble(Config.getProperties("page"));
        helper = new PaginationHelper( new char[]{'a','b','c','d','e','f'},d);
    }

    @When("print result for items count")
    public void print_result_for_items_count() {
        System.out.println(helper.itemCount());
    }

    @Then("actual count result must be equal to the expected count for count of items")
    public void actual_count_result_must_be_equal_to_the_expected_count_for_count_of_items() {
        int i = Integer.parseInt(Config.getProperties("expectedItemCount"));
        Assert.assertEquals(helper.itemCount(),i);
    }
}
