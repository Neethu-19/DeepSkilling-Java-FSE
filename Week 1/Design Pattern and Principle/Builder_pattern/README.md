# Builder Pattern Example

This project demonstrates the implementation of the Builder Pattern in Java for creating complex Computer objects with multiple optional parts.

## Project Structure

```
Builder_pattern/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── computer/
│                   ├── Computer.java
│                   └── ComputerBuilderTest.java
├── bin/
│   └── com/
│       └── computer/
│           ├── Computer.class
│           ├── Computer$Builder.class
│           └── ComputerBuilderTest.class
├── output.txt
├── README.md
└── BuilderPattern_Explanation.md
```

## Builder Pattern Implementation

### Computer Class
The `Computer` class represents a complex object with multiple attributes:
- **Required attributes**: CPU, RAM, Storage
- **Optional attributes**: Graphics Card, Motherboard, Power Supply, Cooling System, WiFi, Bluetooth, Operating System

### Builder Class
The `Computer.Builder` class is a static nested class that:
- Takes required parameters in its constructor
- Provides methods for setting optional parameters
- Uses method chaining for fluent API
- Has a `build()` method that returns the final Computer object

### Key Features

1. **Private Constructor**: The Computer class has a private constructor that only accepts a Builder, ensuring objects can only be created through the Builder.

2. **Method Chaining**: All Builder methods return the Builder instance, allowing for fluent method calls.

3. **Default Values**: Optional parameters have sensible default values.

4. **Immutable Objects**: Once created, Computer objects cannot be modified.

## Usage Examples

### Basic Computer
```java
Computer basicComputer = new Computer.Builder("Intel Core i3-10100", "8GB DDR4", "256GB SSD")
        .build();
```

### Gaming Computer
```java
Computer gamingComputer = new Computer.Builder("AMD Ryzen 7 5800X", "32GB DDR4", "1TB NVMe SSD")
        .graphicsCard("NVIDIA RTX 3080")
        .motherboard("ASUS ROG Strix B550-F")
        .powerSupply("750W Gold Certified")
        .coolingSystem("Liquid Cooling System")
        .enableWifi()
        .enableBluetooth()
        .operatingSystem("Windows 11 Pro")
        .build();
```

## Benefits of Builder Pattern

1. **Readability**: Method chaining makes the code more readable and self-documenting.
2. **Flexibility**: Easy to create objects with different combinations of optional parameters.
3. **Immutability**: Objects are immutable once created.
4. **Type Safety**: Compile-time checking of parameters.
5. **Encapsulation**: Complex construction logic is hidden from the client.

## Running the Example

1. Navigate to the project directory:
   ```bash
   cd Builder_pattern
   ```

2. Compile the Java files:
   ```bash
   javac -d bin src/main/java/com/computer/*.java
   ```

3. Run the test class:
   ```bash
   java -cp bin com.computer.ComputerBuilderTest
   ```

## Demo Output

The program demonstrates the Builder Pattern with various Computer configurations:

### 1. Basic Computer Configuration
- Minimal configuration with default values for optional parameters

### 2. Gaming Computer Configuration
- High-end components for gaming performance
- Custom graphics card, motherboard, power supply, and cooling
- WiFi and Bluetooth enabled
- Windows 11 Pro operating system

### 3. Workstation Computer Configuration
- Professional-grade components for workstations
- High-performance CPU, RAM, and storage
- Professional graphics card
- Ubuntu Linux operating system

### 4. Budget Computer Configuration
- Cost-effective components
- Integrated graphics
- Basic features enabled

### 5. Server Computer Configuration
- Server-grade components
- High-capacity storage
- Server operating system

### 6. Builder Pattern Flexibility Demo
- Shows how the same base configuration can be used to create different computers
- Demonstrates method chaining and optional parameter setting

**View the complete output**: Check the `output.txt` file for the full demo results.

## Expected Output

The program will demonstrate:
- Creating different Computer configurations
- Method chaining capabilities
- Default value handling
- Flexibility of the Builder pattern

## Design Pattern Benefits Demonstrated

- **Separation of Concerns**: Construction logic is separated from the object representation
- **Fluent Interface**: Easy-to-read method chaining
- **Optional Parameters**: Only set the parameters you need
- **Immutability**: Objects cannot be modified after creation
- **Type Safety**: Compile-time validation of parameters 