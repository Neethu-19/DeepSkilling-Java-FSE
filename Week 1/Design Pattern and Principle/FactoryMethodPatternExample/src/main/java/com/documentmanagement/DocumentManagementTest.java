package com.documentmanagement;

/**
 * Test class to demonstrate the Factory Method Pattern implementation.
 * This class shows how different document types can be created using their respective factories.
 */
public class DocumentManagementTest {
    public static void main(String[] args) {
        System.out.println("=== Factory Method Pattern Demo ===\n");

        // Create factories for different document types
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Create different types of documents using their respective factories
        Document wordDoc = wordFactory.createDocument("Sample Report");
        Document pdfDoc = pdfFactory.createDocument("User Manual");
        Document excelDoc = excelFactory.createDocument("Financial Data");

        // Demonstrate document operations
        System.out.println("1. Creating and working with Word Document:");
        wordDoc.createContent();
        wordDoc.displayInfo();
        wordDoc.save();
        wordDoc.open();
        ((WordDocument) wordDoc).addFormatting("Important text", "Bold");
        System.out.println();

        System.out.println("2. Creating and working with PDF Document:");
        pdfDoc.createContent();
        pdfDoc.displayInfo();
        pdfDoc.save();
        pdfDoc.open();
        ((PdfDocument) pdfDoc).addSecurity("secret123");
        ((PdfDocument) pdfDoc).setPageLayout("A4");
        System.out.println();

        System.out.println("3. Creating and working with Excel Document:");
        excelDoc.createContent();
        excelDoc.displayInfo();
        excelDoc.save();
        excelDoc.open();
        ((ExcelDocument) excelDoc).addFormula("=SUM(A1:A10)");
        System.out.println();

        System.out.println("=== Factory Method Pattern Demo Complete ===");
    }
}