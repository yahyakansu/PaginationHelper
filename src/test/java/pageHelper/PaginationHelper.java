package pageHelper;

public class PaginationHelper {
    private final char[] collection;
    private final double itemsPerPage;

    /**
     * Constructor takes array and page number
     * @param collection
     * @param itemsPerPage
     */
    public PaginationHelper(char[] collection,double itemsPerPage){
        this.collection=collection;
        this.itemsPerPage=itemsPerPage;
    }

    /**
     * return the number of items for page count
     * @return int
     */
    public int pageCount(){
        int i = (int) Math.ceil(collection.length/itemsPerPage);
        return i;
    }

    /**
     * it counts the items
     * @return int
     */
    public int itemCount(){
        return collection.length;
    }

    /**
     * return the number of items on the current page
     * zero base index
     * @param page
     * @return int
     */
    public int pageItemCount(int page){
        int i = pageCount();
        if (i>page+1){
            return (int)itemsPerPage;
        }
        else if (i==page+1){
            return (int)(collection.length%itemsPerPage);
        }else {
            return -1;
        }
    }

    /**
     * It shows remaining
     * @param item
     * @return
     */
    public int pageIndex(int item){
        if (item<0 || item>collection.length){
            return -1;
        }else {
            return collection.length%item;
        }
    }
}

