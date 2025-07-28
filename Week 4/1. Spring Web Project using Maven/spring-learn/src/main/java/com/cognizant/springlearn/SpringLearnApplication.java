package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Main Spring Boot Application class
 * This is the entry point of the Spring Boot application
 */
@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        logger.info("Starting SpringLearnApplication...");
        logger.info("Initializing Spring Boot application context...");
        
        SpringApplication.run(SpringLearnApplication.class, args);
        
        logger.info("SpringLearnApplication started successfully!");
        logger.info("Application is running on http://localhost:8080");
    }
} 