# JWT Authentication Service

This project is a simple Spring Boot-based authentication service that issues JWT tokens upon successful authentication using Basic Auth credentials.

## Features
- Exposes `/authenticate` endpoint for JWT token generation
- Accepts Basic Auth credentials (username: `user`, password: `pwd`)
- Returns a JWT token in JSON format
- Configured with Spring Security

## Prerequisites
- Java 8 or higher
- Maven 3.6+

## Setup
1. **Navigate to the project directory:**
   ```sh
   cd "Week 4/6. Authentication service that returns JWT"
   ```
2. **Build the project:**
   ```sh
   mvn clean package
   ```
3. **Run the application:**
   ```sh
   mvn spring-boot:run
   ```
   If you encounter a `No plugin found for prefix 'spring-boot'` error, ensure your `pom.xml` contains the following plugin:
   ```xml
   <build>
     <plugins>
       <plugin>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-maven-plugin</artifactId>
       </plugin>
     </plugins>
   </build>
   ```
   Then run `mvn clean package` again to download the plugin.

## Usage
By default, the service runs on port 8080. To use port 8090, add the following to `src/main/resources/application.properties`:
```
server.port=8090
```

### Request a JWT Token
Use the following curl command:
```sh
curl -s -u user:pwd http://localhost:8080/authenticate
```
Or, if using port 8090:
```sh
curl -s -u user:pwd http://localhost:8090/authenticate
```

**Response:**
```
{"token":"<jwt-token>"}
```

## Troubleshooting
- **Plugin not found:** Ensure the `spring-boot-maven-plugin` is present in your `pom.xml` and run `mvn clean package` to download it.
- **Port issues:** Make sure the port is not in use or change it in `application.properties`.
- **Invalid credentials:** Only `user:pwd` is accepted for demo purposes.

## License
This project is for educational/demo purposes. 