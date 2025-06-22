package com.documentmanagement;

/**
 * Concrete Factory for creating PDF documents.
 * This is a Concrete Creator in the Factory Method Pattern.
 */
public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(String name) {
        return new PdfDocument(name);
    }
}