package com.documentmanagement;

/**
 * Concrete Factory for creating Word documents.
 * This is a Concrete Creator in the Factory Method Pattern.
 */
public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument(String name) {
        return new WordDocument(name);
    }
}