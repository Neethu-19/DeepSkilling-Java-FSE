package com.example.singleton;

public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.log("First log message");
        logger2.log("Second log message");
        if (logger1 == logger2) {
            System.out.println("Logger is a singleton. Both logger1 and logger2 point to the same instance.");
        } else {
            System.out.println("Logger is NOT a singleton. They are different instances.");
        }
    }
} 