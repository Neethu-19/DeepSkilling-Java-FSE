package main.java.com;

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
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shirt", "Apparel"),
            new Product(150, "Book", "Stationery"),
            new Product(120, "Phone", "Electronics"),
            new Product(180, "Shoes", "Footwear")
        };

        int searchId = 150;
        System.out.println("Linear Search for productId " + searchId + ":");
        Product foundLinear = linearSearch(products, searchId);
        System.out.println(foundLinear != null ? foundLinear : "Product not found");

        // Sort array for binary search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
        System.out.println("\nBinary Search for productId " + searchId + ":");
        Product foundBinary = binarySearch(products, searchId);
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
    }
} 