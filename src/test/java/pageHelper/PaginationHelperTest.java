package pageHelper;

import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class PaginationHelperTest {
    PaginationHelper helper;

    @BeforeTest
    public void setup(){
        helper = new PaginationHelper( new char[]{'a','b','c','d','e','f'},4);
    }

    /**
     * to confirm how many pages will create
     * depends on @BeforeTest values
     */
    @Test
    public void pageCountTest(){
        System.out.println(helper.pageCount());
        Assert.assertEquals(helper.pageCount(),2);
    }

    /**
     * assertion for item counts in the array
     * depends on @BeforeTest values
     */
    @Test
    public void itemCountTest(){
        System.out.println(helper.itemCount());
        Assert.assertEquals(helper.itemCount(),6);
    }

    /**
     * to check that how many items are in the current page
     * depends on @BeforeTest values and page number
     */
    @Test
    public void pageItemCountTest(){
        System.out.println(helper.pageItemCount(0));
        Assert.assertEquals(helper.pageItemCount(0),4);

        System.out.println(helper.pageItemCount(1));
        Assert.assertEquals(helper.pageItemCount(1),2);

        System.out.println(helper.pageItemCount(2));
        Assert.assertEquals(helper.pageItemCount(2),-1);
    }

    /**
     * shows how many item are remaining
     * depends on @BeforeTest values and page number
     */
    @Test
    public void pageIndexTest(){
        System.out.println(helper.pageIndex(5));
        Assert.assertEquals(helper.pageIndex(5),1);

        System.out.println(helper.pageIndex(2));
        Assert.assertEquals(helper.pageIndex(2),0);

        System.out.println(helper.pageIndex(20));
        Assert.assertEquals(helper.pageIndex(20),-1);

        System.out.println(helper.pageIndex(-10));
        Assert.assertEquals(helper.pageIndex(-10),-1);
    }
}
