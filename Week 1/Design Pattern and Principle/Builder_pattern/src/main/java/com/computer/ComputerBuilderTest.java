package com.computer;

/**
 * Test class to demonstrate the Builder Pattern implementation.
 * Shows how to create different Computer configurations using the Builder.
 */
public class ComputerBuilderTest {
    
    public static void main(String[] args) {
        System.out.println("=== Builder Pattern Demo: Computer Configuration ===\n");
        
        // Test 1: Basic Computer with minimal configuration
        System.out.println("1. Basic Computer Configuration:");
        Computer basicComputer = new Computer.Builder("Intel Core i3-10100", "8GB DDR4", "256GB SSD")
                .build();
        System.out.println(basicComputer);
        
        // Test 2: Gaming Computer with high-end components
        System.out.println("2. Gaming Computer Configuration:");
        Computer gamingComputer = new Computer.Builder("AMD Ryzen 7 5800X", "32GB DDR4", "1TB NVMe SSD")
                .graphicsCard("NVIDIA RTX 3080")
                .motherboard("ASUS ROG Strix B550-F")
                .powerSupply("750W Gold Certified")
                .coolingSystem("Liquid Cooling System")
                .enableWifi()
                .enableBluetooth()
                .operatingSystem("Windows 11 Pro")
                .build();
        System.out.println(gamingComputer);
        
        // Test 3: Workstation Computer for professional use
        System.out.println("3. Workstation Computer Configuration:");
        Computer workstationComputer = new Computer.Builder("Intel Core i9-12900K", "64GB DDR5", "2TB NVMe SSD")
                .graphicsCard("NVIDIA RTX A4000")
                .motherboard("MSI MEG Z690 ACE")
                .powerSupply("850W Platinum Certified")
                .coolingSystem("Custom Water Cooling Loop")
                .enableWifi()
                .enableBluetooth()
                .operatingSystem("Ubuntu 22.04 LTS")
                .build();
        System.out.println(workstationComputer);
        
        // Test 4: Budget Computer with some optional features
        System.out.println("4. Budget Computer Configuration:");
        Computer budgetComputer = new Computer.Builder("AMD Ryzen 5 5600G", "16GB DDR4", "512GB SSD")
                .motherboard("MSI B550M Pro-VDH")
                .powerSupply("550W Bronze Certified")
                .enableWifi()
                .operatingSystem("Windows 10 Home")
                .build();
        System.out.println(budgetComputer);
        
        // Test 5: Server Computer with specific requirements
        System.out.println("5. Server Computer Configuration:");
        Computer serverComputer = new Computer.Builder("Intel Xeon E5-2680", "128GB ECC DDR4", "4TB HDD")
                .graphicsCard("Basic Display Adapter")
                .motherboard("Supermicro X11DPH-T")
                .powerSupply("1000W Redundant PSU")
                .coolingSystem("Server-grade Air Cooling")
                .enableWifi()
                .operatingSystem("CentOS 8")
                .build();
        System.out.println(serverComputer);
        
        // Demonstrate method chaining and flexibility
        System.out.println("6. Demonstrating Builder Pattern Flexibility:");
        System.out.println("Creating computers with different configurations using the same Builder...\n");
        
        // Same base configuration, different optional features
        Computer.Builder baseBuilder = new Computer.Builder("Intel Core i5-12400", "16GB DDR4", "1TB SSD");
        
        Computer officeComputer = baseBuilder
                .enableWifi()
                .enableBluetooth()
                .operatingSystem("Windows 11 Home")
                .build();
        
        Computer homeComputer = baseBuilder
                .graphicsCard("NVIDIA GTX 1660 Super")
                .enableWifi()
                .operatingSystem("Windows 10 Pro")
                .build();
        
        Computer mediaComputer = baseBuilder
                .graphicsCard("AMD RX 6600")
                .enableWifi()
                .enableBluetooth()
                .operatingSystem("Windows 11 Pro")
                .build();
        
        System.out.println("Office Computer:");
        System.out.println(officeComputer);
        
        System.out.println("Home Computer:");
        System.out.println(homeComputer);
        
        System.out.println("Media Computer:");
        System.out.println(mediaComputer);
        
        // Demonstrate validation and error handling
        System.out.println("7. Builder Pattern Benefits:");
        System.out.println("- Immutable objects: Computer objects cannot be modified after creation");
        System.out.println("- Fluent interface: Method chaining for readable code");
        System.out.println("- Optional parameters: Only set what you need");
        System.out.println("- Type safety: Compile-time checking of parameters");
        System.out.println("- Encapsulation: Complex construction logic is hidden");
        
        System.out.println("\n=== Builder Pattern Demo Completed ===");
    }
} 