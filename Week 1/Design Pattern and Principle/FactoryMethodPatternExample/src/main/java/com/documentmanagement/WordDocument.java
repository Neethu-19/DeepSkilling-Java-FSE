package com.documentmanagement;

/**
 * Concrete implementation of Document for Word documents.
 * This is a Concrete Product in the Factory Method Pattern.
 */
public class WordDocument extends Document {
    
    public WordDocument(String name) {
        super(name);
    }
    
    @Override
    public void createContent() {
        this.content = "This is a Word document with rich text formatting.\n" +
                      "It supports bold, italic, underline, and other text styles.\n" +
                      "Document created: " + java.time.LocalDateTime.now();
        System.out.println("Creating Word document content...");
    }
    
    @Override
    public void save() {
        System.out.println("Saving Word document '" + name + "' as .docx file");
        System.out.println("Applying Word-specific formatting and compression...");
    }
    
    @Override
    public void open() {
        System.out.println("Opening Word document '" + name + "' with Microsoft Word or compatible application");
        System.out.println("Loading rich text formatting and styles...");
    }
    
    /**
     * Word-specific method for adding formatting
     */
    public void addFormatting(String text, String format) {
        System.out.println("Applying " + format + " formatting to: " + text);
        this.content += "\n[Formatted: " + format + "] " + text;
    }
} 