package com.documentmanagement;

/**
 * Abstract base class for all document types.
 * This is the Product interface in the Factory Method Pattern.
 */
public abstract class Document {
    protected String name;
    protected String content;
    
    public Document(String name) {
        this.name = name;
        this.content = "";
    }
    
    /**
     * Abstract method that must be implemented by concrete document classes.
     * Each document type will have its own way of creating content.
     */
    public abstract void createContent();
    
    /**
     * Abstract method for saving the document.
     * Each document type will have its own save mechanism.
     */
    public abstract void save();
    
    /**
     * Abstract method for opening the document.
     * Each document type will have its own open mechanism.
     */
    public abstract void open();
    
    /**
     * Get the document name.
     */
    public String getName() {
        return name;
    }
    
    /**
     * Get the document content.
     */
    public String getContent() {
        return content;
    }
    
    /**
     * Set the document content.
     */
    public void setContent(String content) {
        this.content = content;
    }
    
    /**
     * Display document information.
     */
    public void displayInfo() {
        System.out.println("Document: " + name);
        System.out.println("Type: " + this.getClass().getSimpleName());
        System.out.println("Content: " + content);
        System.out.println("---");
    }
} 