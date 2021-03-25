package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageHelper.PaginationHelper;
import utilities.Config;

public class PageIndexSteps {
    PaginationHelper helper;

    @Given("an array and integer value for page index")
    public void an_array_and_integer_value_for_page_index() {
        double d = Double.parseDouble(Config.getProperties("page"));
        helper = new PaginationHelper( new char[]{'a','b','c','d','e','f'},d);
    }

    @When("print result for valid value with remainder")
    public void print_result_for_valid_value_with_remainder() {
        System.out.println(helper.pageIndex(5));
    }

    @Then("actual count result must be equal to the expected result for valid value with remainder")
    public void actual_count_result_must_be_equal_to_the_expected_result_for_valid_value_with_remainder() {
        int i = Integer.parseInt(Config.getProperties("expectedValidWithRemainderItem"));
        Assert.assertEquals(helper.pageIndex(5),i);
    }

    @When("print result for valid value without remainder")
    public void print_result_for_valid_value_without_remainder() {
        System.out.println(helper.pageIndex(2));
    }

    @Then("actual count result must be equal to the expected result for valid value without remainder")
    public void actual_count_result_must_be_equal_to_the_expected_result_for_valid_value_without_remainder() {
        int i = Integer.parseInt(Config.getProperties("expectedValidWithoutRemainderItem"));
        Assert.assertEquals(helper.pageIndex(2),i);
    }

    @When("print result for out of range value")
    public void print_result_for_out_of_range_value() {
        System.out.println(helper.pageIndex(20));
    }

    @Then("actual count result must be equal to the expected result for out of range value")
    public void actual_count_result_must_be_equal_to_the_expected_result_for_out_of_range_value() {
        int i = Integer.parseInt(Config.getProperties("expectedOutOfRange"));
        Assert.assertEquals(helper.pageIndex(20),i);
    }

    @When("print result for negative value")
    public void print_result_for_negative_value() {
        System.out.println(helper.pageIndex(-10));
    }

    @Then("actual count result must be equal to the expected result for negative value")
    public void actual_count_result_must_be_equal_to_the_expected_result_for_negative_value() {
        int i = Integer.parseInt(Config.getProperties("expectedNegative"));
        Assert.assertEquals(helper.pageIndex(-10),i);
    }

}
