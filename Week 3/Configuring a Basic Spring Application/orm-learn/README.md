# orm-learn

Demo project for Spring Data JPA and Hibernate

## Prerequisites
- Java 17 or compatible version
- Maven
- MySQL Server
- MySQL Workbench (optional, for database management)
- Eclipse IDE (or any Java IDE)

## Project Features
- Spring Boot application using Spring Data JPA
- MySQL database integration
- Example entity, repository, and service layers

## Setup Instructions

1. **Clone or Download the Project**
   - Download the project zip or clone the repository to your local machine.

2. **Configure the Database**
   - Start MySQL Server.
   - Create a schema named `ormlearn`:
     ```sql
     CREATE SCHEMA ormlearn;
     USE ormlearn;
     CREATE TABLE country (
       co_code VARCHAR(2) PRIMARY KEY,
       co_name VARCHAR(50)
     );
     INSERT INTO country VALUES ('IN', 'India');
     INSERT INTO country VALUES ('US', 'United States of America');
     ```

3. **Configure Application Properties**
   - Edit `src/main/resources/application.properties` with your MySQL username and password:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
     spring.datasource.username=YOUR_USERNAME
     spring.datasource.password=YOUR_PASSWORD
     ```

4. **Build the Project**
   - Open a terminal in the project directory and run:
     ```sh
     mvn clean package
     ```

5. **Run the Application**
   - In your IDE, run the `OrmLearnApplication` main class, or use:
     ```sh
     mvn spring-boot:run
     ```

## Usage
- The application will connect to the MySQL database and perform basic JPA operations.
- Check the logs for output and SQL statements.

## License
This project is for educational purposes only. 