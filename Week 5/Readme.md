# Account Microservice

This is a simple Spring Boot microservice for handling account details. It is part of a microservices learning exercise.

## Project Structure

- `src/main/java/com/cognizant/account` - Java source code
- `src/main/resources/application.properties` - Application configuration
- `pom.xml` - Maven build file

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## Setup

1. Clone or download this project.
2. Navigate to the project directory:
   ```sh
   cd account
   ```

## Build

Run the following command to build the project:
```sh
mvn clean package
```

## Run

Start the application using:
```sh
mvn spring-boot:run
```

By default, the service runs on port `8080`. If this port is in use, you can change it in `src/main/resources/application.properties`:
```
server.port=8082
```

## API Usage

### Get Account Details

- **Endpoint:** `GET /accounts/{number}`
- **Example:**
  ```
  GET http://localhost:8082/accounts/00987987973432
  ```
- **Sample Response:**
  ```json
  {
    "number": "00987987973432",
    "type": "savings",
    "balance": 234343
  }
  ```

## Notes

- This service returns dummy data and does not connect to any backend database.
- For learning purposes only.
