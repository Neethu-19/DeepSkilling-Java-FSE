package com.documentmanagement;

/**
 * Concrete Factory for creating Excel documents.
 * This is a Concrete Creator in the Factory Method Pattern.
 */
public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(String name) {
        return new ExcelDocument(name);
    }
}