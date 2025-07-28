// Exercise 7: Financial Forecasting
// 1. Recursion Explanation:
// Recursion is a programming technique where a method calls itself to solve a problem by breaking it down into smaller subproblems.
// It is especially useful for problems that can be defined in terms of similar subproblems, such as computing factorials, Fibonacci numbers, or traversing tree structures.
// Recursion can simplify code and make it more readable, but may lead to excessive computation or stack overflow if not used carefully.

public class FinancialForecasting {
    /**
     * 2. Recursive Future Value Calculation
     * Calculates the future value recursively given:
     *   - principal: the initial amount
     *   - rate: the growth rate per period (e.g., 0.05 for 5%)
     *   - periods: number of periods to forecast
     * Formula: FV = principal * (1 + rate)^periods
     */
    public static double futureValueRecursive(double principal, double rate, int periods) {
        if (periods == 0) {
            return principal;
        }
        // Recursive step: apply growth for one period, then recurse
        return futureValueRecursive(principal * (1 + rate), rate, periods - 1);
    }

    // 3. Implementation and demonstration
    public static void main(String[] args) {
        double principal = 1000.0;
        double rate = 0.05; // 5% growth per period
        int periods = 10;

        double result = futureValueRecursive(principal, rate, periods);
        System.out.printf("Future value after %d periods: %.2f\n", periods, result);
    }

    /*
     * 4. Analysis:
     * Time Complexity: O(n), where n = periods. Each recursive call reduces periods by 1, so there are n calls.
     * Space Complexity: O(n) due to the call stack.
     *
     * Optimization:
     * - For large n, recursion can cause stack overflow. Use iteration instead.
     * - Alternatively, use the closed-form formula: FV = principal * Math.pow(1 + rate, periods), which is O(1).
     * - Memoization is not needed here, as each subproblem is unique and not reused.
     */
}
