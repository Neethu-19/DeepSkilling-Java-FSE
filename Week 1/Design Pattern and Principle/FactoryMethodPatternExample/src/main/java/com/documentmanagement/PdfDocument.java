package com.documentmanagement;

/**
 * Concrete implementation of Document for PDF documents.
 * This is a Concrete Product in the Factory Method Pattern.
 */
public class PdfDocument extends Document {
    public PdfDocument(String name) {
        super(name);
    }

    @Override
    public void createContent() {
        this.content = "This is a PDF document with fixed layout formatting.\n" +
                      "It maintains consistent formatting across different devices.\n" +
                      "Document created: " + java.time.LocalDateTime.now();
        System.out.println("Creating PDF document content...");
    }

    @Override
    public void save() {
        System.out.println("Saving PDF document '" + name + "' as .pdf file");
        System.out.println("Applying PDF-specific compression and security...");
    }

    @Override
    public void open() {
        System.out.println("Opening PDF document '" + name + "' with PDF reader application");
        System.out.println("Loading fixed layout and rendering pages...");
    }

    /**
     * PDF-specific method for adding security
     */
    public void addSecurity(String password) {
        System.out.println("Adding password protection to PDF: " + password);
        this.content += "\n[Security: Password protected]";
    }

    /**
     * PDF-specific method for setting page layout
     */
    public void setPageLayout(String layout) {
        System.out.println("Setting PDF page layout to: " + layout);
        this.content += "\n[Layout: " + layout + "]";
    }
}