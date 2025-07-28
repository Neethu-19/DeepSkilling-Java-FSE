import java.util.Arrays;
import java.util.Comparator;

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() { return productId; }
    public String getProductName() { return productName; }
    public String getCategory() { return category; }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}

public class ProductSearchDemo {
    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (array must be sorted by productId)
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].getProductId() == targetId) {
                return products[mid];
            } else if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        // Add more products for a larger dataset
        Product[] products = new Product[1000];
        for (int i = 0; i < 1000; i++) {
            products[i] = new Product(100 + i, "Product" + (100 + i), "Category" + (i % 10));
        }

        int presentId = 999; // Last product (worst case for linear search)
        int absentId = 5000; // Not present

        // Linear Search - Present
        long start = System.nanoTime();
        Product foundLinear = linearSearch(products, presentId);
        long end = System.nanoTime();
        System.out.println("Linear Search (present) for productId " + presentId + ":");
        System.out.println(foundLinear != null ? foundLinear : "Product not found");
        System.out.println("Time taken: " + (end - start) + " ns\n");

        // Linear Search - Absent
        start = System.nanoTime();
        foundLinear = linearSearch(products, absentId);
        end = System.nanoTime();
        System.out.println("Linear Search (absent) for productId " + absentId + ":");
        System.out.println(foundLinear != null ? foundLinear : "Product not found");
        System.out.println("Time taken: " + (end - start) + " ns\n");

        // Sort array for binary search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        // Binary Search - Present
        start = System.nanoTime();
        Product foundBinary = binarySearch(products, presentId);
        end = System.nanoTime();
        System.out.println("Binary Search (present) for productId " + presentId + ":");
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
        System.out.println("Time taken: " + (end - start) + " ns\n");

        // Binary Search - Absent
        start = System.nanoTime();
        foundBinary = binarySearch(products, absentId);
        end = System.nanoTime();
        System.out.println("Binary Search (absent) for productId " + absentId + ":");
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
        System.out.println("Time taken: " + (end - start) + " ns\n");
    }
} 