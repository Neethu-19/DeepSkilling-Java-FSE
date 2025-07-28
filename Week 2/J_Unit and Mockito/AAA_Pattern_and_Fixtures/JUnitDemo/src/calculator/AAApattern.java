package calculator;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAApattern {
    private Calculator calc;

    @Before
    public void setUp() {
        // Arrange: Create a new Calculator before each test
        calc = new Calculator();
    }

    @After
    public void tearDown() {
        // Teardown: Clean up after each test (if needed)
        calc = null;
    }

    @Test
    public void testAdd() {
        // Act
        int result = calc.add(2, 3);
        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testAddNegative() {
        // Act
        int result = calc.add(-2, -3);
        // Assert
        assertEquals(-5, result);
    }
}