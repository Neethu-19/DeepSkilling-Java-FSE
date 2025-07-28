# LibraryManagement

A simple Maven-based Java application demonstrating basic Spring configuration and project setup.

## Features
- Spring XML configuration example
- Maven project structure

## Prerequisites
- Java 8 or higher
- Maven 3.x or higher

## Project Structure
```
LibraryManagement/
├── pom.xml
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── library/
│       │           └── LibraryMain.java
│       └── resources/
│           └── applicationContext.xml
```

## Build and Run
1. Open a terminal and navigate to the project directory:
   ```
   cd path/to/LibraryManagement
   ```
2. Compile the project:
   ```
   mvn compile
   ```
3. Run the application:
   ```
   mvn exec:java -Dexec.mainClass=com.library.LibraryMain
   ```

## License
This project is for educational purposes. 