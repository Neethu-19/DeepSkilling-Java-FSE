# REST - Get Country Based on Country Code

This project is a simple Spring Boot RESTful web service that returns country details based on a given country code.

## Features

- Exposes a REST API endpoint to fetch country information by country code.
- Built using Spring Boot (`spring-boot-starter-web`).
- Includes unit tests with `spring-boot-starter-test`.

## Getting Started

### Prerequisites

- Java 8 or higher
- Maven

### Building the Project

```bash
mvn clean install
```

### Running the Application

```bash
mvn spring-boot:run
```

The application will start on [http://localhost:8080](http://localhost:8080).

### API Usage

- **Endpoint:** `/country/{code}`
- **Method:** `GET`
- **Description:** Returns country details for the given country code.

#### Example

```
GET http://localhost:8080/country/IN
```

**Response:**
```json
{
  "code": "IN",
  "name": "India"
}
```

## Project Structure

- `src/main/java` - Java source code for the REST API
- `src/test/java` - Unit tests
- `pom.xml` - Maven configuration

## License

This project is for educational purposes. 