# REST - Country Web Service

This project is a simple Spring Boot REST service that returns details of the country India.

## Features
- Exposes a REST endpoint at `/country`.
- Returns a JSON response with India's country code and name.
- Loads country details from a Spring XML configuration file.

## Project Structure
- `src/main/java/com/cognizant/springlearn/model/Country.java`: Country bean.
- `src/main/java/com/cognizant/springlearn/controller/CountryController.java`: REST controller.
- `src/main/resources/country.xml`: Spring XML config defining the India bean.
- `src/main/resources/application.properties`: Sets server port to 8083.
- `pom.xml`: Maven build file.

## How to Build and Run

1. **Build the project:**
   ```sh
   mvn clean package -f "Week 4/4. REST - Country Web Service/pom.xml"
   ```
2. **Run the application:**
   ```sh
   mvn spring-boot:run -f "Week 4/4. REST - Country Web Service/pom.xml"
   ```
3. **Test the endpoint:**
   - Open your browser or Postman.
   - Go to: [http://localhost:8083/country](http://localhost:8083/country)
   - You should see:
     ```json
     {
       "code": "IN",
       "name": "India"
     }
     ```

## SME Explanations

### What happens in the controller method?
- When a GET request is made to `/country`, Spring calls `getCountryIndia()`.
- This method loads the Spring context from `country.xml`, retrieves the `country` bean (with code "IN" and name "India"), and returns it.
- Spring automatically serializes the returned `Country` object to JSON because of the `@RestController` annotation.

### How is the bean converted into a JSON response?
- The `@RestController` annotation tells Spring to convert the return value of methods to JSON (using Jackson by default).
- The `Country` bean’s fields (`code`, `name`) are mapped to JSON keys and values.
- The HTTP response’s `Content-Type` is set to `application/json`.

### How to view HTTP header details
- **Browser Dev Tools:**
  - Open the Network tab, click the `/country` request, and look under "Headers".
- **Postman:**
  - After sending the request, click the "Headers" tab in the response section.
- Typical headers include:
  - `Content-Type: application/json`
  - `Content-Length: ...`
  - `Date: ...`
  - `Connection: keep-alive`

---
