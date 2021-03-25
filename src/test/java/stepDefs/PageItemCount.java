package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageHelper.PaginationHelper;
import utilities.Config;

public class PageItemCount {
    PaginationHelper helper;

    @Given("an array and integer value for count of page for page item count for page items")
    public void an_array_and_integer_value_for_count_of_page_for_page_item_count_for_page_items() {
        double d = Double.parseDouble(Config.getProperties("page"));
        helper = new PaginationHelper( new char[]{'a','b','c','d','e','f'},d);
    }

    @When("print result for items count in first page")
    public void print_result_for_items_count_in_first_page() {
        System.out.println(helper.pageItemCount(0));
    }

    @Then("actual count result must be equal to the expected count for first page")
    public void actual_count_result_must_be_equal_to_the_expected_count_for_first_page() {
        int i = Integer.parseInt(Config.getProperties("expectedFirstPageItem"));
        Assert.assertEquals(helper.pageItemCount(0),i);
    }


    @When("print result for items count in second page")
    public void print_result_for_items_count_in_second_page() {
        System.out.println(helper.pageItemCount(1));
    }

    @Then("actual count result must be equal to the expected count for second page")
    public void actual_count_result_must_be_equal_to_the_expected_count_for_second_page() {
        int i = Integer.parseInt(Config.getProperties("expectedSecondPageItem"));
        Assert.assertEquals(helper.pageItemCount(1),i);
    }

    @When("print result for invalid value")
    public void print_result_for_invalid_value() {
        System.out.println(helper.pageItemCount(2));
    }

    @Then("actual result must be equal {int}")
    public void actual_result_must_be_equal(Integer int1) {
        int i = Integer.parseInt(Config.getProperties("expectedOutOfRangeValue"));
        Assert.assertEquals(helper.pageItemCount(2),i);
    }
}
