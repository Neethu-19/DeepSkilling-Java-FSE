# LibraryManagement

A simple Spring-based Java application for managing a library backend.

## Features
- Demonstrates basic Spring XML configuration
- Service and repository layer example
- Maven project structure

## Project Structure
```
LibraryManagement/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── library/
│   │   │           ├── LibraryMain.java
│   │   │           ├── service/
│   │   │           │   └── BookService.java
│   │   │           └── repository/
│   │   │               └── BookRepository.java
│   │   └── resources/
│   │       └── applicationContext.xml
```

## Getting Started

### Prerequisites
- Java 8 or higher
- Maven 3.x

### Build and Run
1. Compile the project:
   ```
   mvn compile
   ```
2. Run the application:
   ```
   mvn exec:java -Dexec.mainClass="com.library.LibraryMain"
   ```

## How it Works
- Beans are defined in `applicationContext.xml`.
- `BookService` depends on `BookRepository`.
- The main class loads the Spring context and calls a method to display books.

## Sample Output
```
BookService: Displaying books...
BookRepository: Listing all books in the library.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  6.529 s
[INFO] Finished at: 2025-07-03T11:34:54+05:30
[INFO] ------------------------------------------------------------------------
```

## License
This project is for educational purposes. 