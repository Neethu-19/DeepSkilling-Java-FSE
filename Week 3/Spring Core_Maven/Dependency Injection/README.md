# LibraryManagement

A simple Spring-based Java application for managing a library backend.

## Features
- Demonstrates basic Spring XML configuration
- Service and repository layer example
- Maven project structure
- **Dependency Injection Example** using a separate package and configuration

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
│   │   │           ├── repository/
│   │   │           │   └── BookRepository.java
│   │   │           └── di_example/
│   │   │               ├── LibraryMain.java
│   │   │               ├── BookService.java
│   │   │               └── BookRepository.java
│   │   └── resources/
│   │       ├── applicationContext.xml
│   │       └── di_example_applicationContext.xml
```

## Getting Started

### Prerequisites
- Java 8 or higher
- Maven 3.x

### Build and Run (Standard Example)
1. Compile the project:
   ```
   mvn compile
   ```
2. Run the application:
   ```
   mvn exec:java -Dexec.mainClass="com.library.LibraryMain"
   ```

### Build and Run (Dependency Injection Example)
1. Compile the project (if not already done):
   ```
   mvn compile
   ```
2. Run the DI example:
   ```
   mvn exec:java -Dexec.mainClass="com.library.di_example.LibraryMain"
   ```

## How it Works
- Beans are defined in `applicationContext.xml` (standard) and `di_example_applicationContext.xml` (DI example).
- `BookService` depends on `BookRepository` via setter injection.
- The main class loads the Spring context and calls a method to display books.

## Sample Output (Dependency Injection Example)
```
BookService: Displaying books...
BookRepository: Listing all books in the library.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  1.308 s
[INFO] Finished at: 2025-07-03T13:18:19+05:30
[INFO] ------------------------------------------------------------------------
```

## License
This project is for educational purposes. 