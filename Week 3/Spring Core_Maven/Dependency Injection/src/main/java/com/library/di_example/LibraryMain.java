package com.library.di_example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryMain {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("di_example_applicationContext.xml");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.displayBooks();
    }
} 