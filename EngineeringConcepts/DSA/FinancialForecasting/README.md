 # Exercise 7: Financial Forecasting

## Scenario
You are developing a financial forecasting tool that predicts future values based on past data.

## Steps
1. **Understand Recursive Algorithms:**
   - Recursion is a technique where a function calls itself to solve smaller instances of a problem.
   - It simplifies problems that can be broken down into similar subproblems.
2. **Setup:**
   - Implement a recursive method to calculate future value based on principal, growth rate, and periods.
3. **Implementation:**
   - The recursive method multiplies the principal by (1 + rate) for each period until periods reach zero.
4. **Analysis:**
   - **Time Complexity:** O(n), where n is the number of periods.
   - **Optimization:** For large periods, use iteration or the closed-form formula to avoid stack overflow.

## Files
- `src/FinancialForecasting.java`: Contains the implementation and explanation.

## Sample Output
When you compile and run the program, you should see output similar to:

```
Future value after 10 periods: 1628.89
```

Below is a screenshot of the output in the terminal:

![Sample Output](output.png)
