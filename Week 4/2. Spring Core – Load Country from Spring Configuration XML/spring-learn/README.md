# Spring Learn Project

This is a Spring Boot Web application created for learning purposes at Cognizant.

## Project Structure

```
spring-learn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       ├── SpringLearnApplication.java
│   │   │       └── controller/
│   │   │           └── HelloController.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── date-format.xml
│   └── test/
│       └── java/
│           └── com/cognizant/springlearn/
│               └── SpringLearnApplicationTests.java
├── pom.xml
└── README.md
```

## Build Instructions

1. Navigate to the project directory
2. Run the Maven build command:
   ```bash
   mvn clean package
   ```

## Running the Application

1. Run the `SpringLearnApplication` class
2. The application will start on `http://localhost:8081`
3. Test endpoints:
   - `http://localhost:8081/` - Home page
   - `http://localhost:8081/hello` - Hello message

## Example Output

### Home Page (`/`)
```
Spring Learn Application is running successfully!
```

### Hello Endpoint (`/hello`)
```
Hello from Spring Boot! Welcome to Cognizant Spring Learning!
```

### Console Output
```
Parsed Date: Mon Dec 31 00:00:00 IST 2018
``` 