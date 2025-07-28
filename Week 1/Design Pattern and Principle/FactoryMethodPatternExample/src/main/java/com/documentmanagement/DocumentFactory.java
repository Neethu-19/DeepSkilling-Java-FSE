package com.documentmanagement;

/**
 * Abstract Factory class for creating documents.
 * This is the Creator in the Factory Method Pattern.
 */
public abstract class DocumentFactory {
    public abstract Document createDocument(String name);
}