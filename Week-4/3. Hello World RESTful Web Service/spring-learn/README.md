# Hello World RESTful Web Service

This is a Spring Boot application that provides a simple REST service returning "Hello World!!".

## Project Structure

```
spring-learn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── cognizant/
│   │   │           └── springlearn/
│   │   │               ├── SpringLearnApplication.java
│   │   │               └── controller/
│   │   │                   └── HelloController.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/
│               └── cognizant/
│                   └── springlearn/
│                       └── SpringLearnApplicationTests.java
├── pom.xml
└── README.md
```

## Requirements

- Java 17 or higher
- Maven 3.6 or higher

## REST Service Details

- **Method**: GET
- **URL**: `/hello`
- **Controller**: `com.cognizant.springlearn.controller.HelloController`
- **Method**: `sayHello()`
- **Response**: "Hello World!!"
- **Server Port**: 8083

## How to Run

### 1. Build the Project
```bash
mvn clean compile
```

### 2. Run the Application
```bash
mvn spring-boot:run
```

Or alternatively:
```bash
mvn clean package
java -jar target/spring-learn-0.0.1-SNAPSHOT.jar
```

### 3. Access the Service
Once the application is running, you can access the REST service at:
- **URL**: http://localhost:8083/hello
- **Expected Response**: Hello World!!

## Testing the Service

### Using Chrome Browser
1. Open Chrome browser
2. Navigate to: http://localhost:8083/hello
3. You should see: "Hello World!!"
4. Open Developer Tools (F12)
5. Go to Network tab
6. Refresh the page
7. Click on the request to `/hello`
8. View the HTTP headers in the Response Headers section

### Using Postman
1. Open Postman
2. Create a new GET request
3. Enter URL: http://localhost:8083/hello
4. Click Send
5. You should see "Hello World!!" in the response body
6. Click on the "Headers" tab to view HTTP header details

## Logging

The application includes comprehensive logging:
- Application startup logs
- Method entry and exit logs for the `sayHello()` method
- HTTP request/response logging

## HTTP Headers to Observe

When testing with Chrome Developer Tools or Postman, you can observe these HTTP headers:

### Request Headers:
- `Host`: localhost:8083
- `User-Agent`: Browser/Postman identifier
- `Accept`: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
- `Accept-Language`: en-US,en;q=0.5
- `Accept-Encoding`: gzip, deflate
- `Connection`: keep-alive

### Response Headers:
- `Content-Type`: text/plain;charset=UTF-8
- `Content-Length`: 12
- `Date`: Current timestamp
- `Server`: Apache-Coyote/1.1 (or similar)

## Troubleshooting

1. **Port already in use**: If port 8083 is already in use, change the port in `application.properties`
2. **Build errors**: Ensure Java 17+ is installed and Maven is properly configured
3. **Connection refused**: Make sure the application is running before testing

## Key Learning Points

- Spring Boot auto-configuration
- REST controller implementation
- Logging with SLF4J
- HTTP request/response handling
- Maven project structure
- Application properties configuration 