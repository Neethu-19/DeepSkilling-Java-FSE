package com.computer;

/**
 * Computer class representing a complex object with multiple optional parts.
 * Uses the Builder pattern to manage the construction process.
 */
public class Computer {
    private String cpu;
    private String ram;
    private String storage;
    private String graphicsCard;
    private String motherboard;
    private String powerSupply;
    private String coolingSystem;
    private boolean hasWifi;
    private boolean hasBluetooth;
    private String operatingSystem;

    /**
     * Private constructor that takes a Builder as parameter.
     * This ensures that Computer objects can only be created through the Builder.
     */
    private Computer(Builder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.motherboard = builder.motherboard;
        this.powerSupply = builder.powerSupply;
        this.coolingSystem = builder.coolingSystem;
        this.hasWifi = builder.hasWifi;
        this.hasBluetooth = builder.hasBluetooth;
        this.operatingSystem = builder.operatingSystem;
    }

    // Getters for all attributes
    public String getCpu() { return cpu; }
    public String getRam() { return ram; }
    public String getStorage() { return storage; }
    public String getGraphicsCard() { return graphicsCard; }
    public String getMotherboard() { return motherboard; }
    public String getPowerSupply() { return powerSupply; }
    public String getCoolingSystem() { return coolingSystem; }
    public boolean hasWifi() { return hasWifi; }
    public boolean hasBluetooth() { return hasBluetooth; }
    public String getOperatingSystem() { return operatingSystem; }

    /**
     * Static nested Builder class that manages the construction of Computer objects.
     */
    public static class Builder {
        // Required parameters
        private String cpu;
        private String ram;
        private String storage;

        // Optional parameters - initialized to default values
        private String graphicsCard = "Integrated Graphics";
        private String motherboard = "Standard Motherboard";
        private String powerSupply = "500W Standard PSU";
        private String coolingSystem = "Stock CPU Cooler";
        private boolean hasWifi = false;
        private boolean hasBluetooth = false;
        private String operatingSystem = "No OS";

        /**
         * Constructor for Builder with required parameters.
         * @param cpu The CPU specification
         * @param ram The RAM specification
         * @param storage The storage specification
         */
        public Builder(String cpu, String ram, String storage) {
            this.cpu = cpu;
            this.ram = ram;
            this.storage = storage;
        }

        /**
         * Set the graphics card.
         * @param graphicsCard The graphics card specification
         * @return Builder instance for method chaining
         */
        public Builder graphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        /**
         * Set the motherboard.
         * @param motherboard The motherboard specification
         * @return Builder instance for method chaining
         */
        public Builder motherboard(String motherboard) {
            this.motherboard = motherboard;
            return this;
        }

        /**
         * Set the power supply.
         * @param powerSupply The power supply specification
         * @return Builder instance for method chaining
         */
        public Builder powerSupply(String powerSupply) {
            this.powerSupply = powerSupply;
            return this;
        }

        /**
         * Set the cooling system.
         * @param coolingSystem The cooling system specification
         * @return Builder instance for method chaining
         */
        public Builder coolingSystem(String coolingSystem) {
            this.coolingSystem = coolingSystem;
            return this;
        }

        /**
         * Enable WiFi capability.
         * @return Builder instance for method chaining
         */
        public Builder enableWifi() {
            this.hasWifi = true;
            return this;
        }

        /**
         * Disable WiFi capability.
         * @return Builder instance for method chaining
         */
        public Builder disableWifi() {
            this.hasWifi = false;
            return this;
        }

        /**
         * Enable Bluetooth capability.
         * @return Builder instance for method chaining
         */
        public Builder enableBluetooth() {
            this.hasBluetooth = true;
            return this;
        }

        /**
         * Disable Bluetooth capability.
         * @return Builder instance for method chaining
         */
        public Builder disableBluetooth() {
            this.hasBluetooth = false;
            return this;
        }

        /**
         * Set the operating system.
         * @param operatingSystem The operating system name
         * @return Builder instance for method chaining
         */
        public Builder operatingSystem(String operatingSystem) {
            this.operatingSystem = operatingSystem;
            return this;
        }

        /**
         * Build and return a Computer instance.
         * @return A new Computer instance with all specified attributes
         */
        public Computer build() {
            return new Computer(this);
        }
    }

    /**
     * Override toString method to display computer specifications.
     * @return String representation of the Computer object
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Computer Specifications:\n");
        sb.append("========================\n");
        sb.append("CPU: ").append(cpu).append("\n");
        sb.append("RAM: ").append(ram).append("\n");
        sb.append("Storage: ").append(storage).append("\n");
        sb.append("Graphics Card: ").append(graphicsCard).append("\n");
        sb.append("Motherboard: ").append(motherboard).append("\n");
        sb.append("Power Supply: ").append(powerSupply).append("\n");
        sb.append("Cooling System: ").append(coolingSystem).append("\n");
        sb.append("WiFi: ").append(hasWifi ? "Yes" : "No").append("\n");
        sb.append("Bluetooth: ").append(hasBluetooth ? "Yes" : "No").append("\n");
        sb.append("Operating System: ").append(operatingSystem).append("\n");
        return sb.toString();
    }
} 