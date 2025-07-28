package com.cognizant.springlearn.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * REST Controller for Hello World service
 * Provides a simple REST endpoint that returns "Hello World!!"
 */
@RestController
public class HelloController {

    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

    /**
     * GET endpoint that returns "Hello World!!"
     * URL: /hello
     * Method: GET
     * 
     * @return String containing "Hello World!!"
     */
    @GetMapping("/hello")
    public String sayHello() {
        logger.info("START - sayHello() method called");
        
        String response = "Hello World!!";
        
        logger.info("END - sayHello() method returning: {}", response);
        return response;
    }
} 