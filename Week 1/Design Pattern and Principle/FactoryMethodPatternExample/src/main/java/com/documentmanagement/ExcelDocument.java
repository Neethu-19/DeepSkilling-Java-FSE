package com.documentmanagement;

/**
 * Concrete implementation of Document for Excel documents.
 * This is a Concrete Product in the Factory Method Pattern.
 */
public class ExcelDocument extends Document {
    public ExcelDocument(String name) {
        super(name);
    }

    @Override
    public void createContent() {
        this.content = "This is an Excel document with spreadsheet data.\n" +
                      "It supports formulas, charts, and tables.\n" +
                      "Document created: " + java.time.LocalDateTime.now();
        System.out.println("Creating Excel document content...");
    }

    @Override
    public void save() {
        System.out.println("Saving Excel document '" + name + "' as .xlsx file");
        System.out.println("Applying Excel-specific data validation and compression...");
    }

    @Override
    public void open() {
        System.out.println("Opening Excel document '" + name + "' with Microsoft Excel or compatible application");
        System.out.println("Loading spreadsheet data and formulas...");
    }

    /**
     * Excel-specific method for adding a formula
     */
    public void addFormula(String formula) {
        System.out.println("Adding formula to Excel: " + formula);
        this.content += "\n[Formula: " + formula + "]";
    }
}