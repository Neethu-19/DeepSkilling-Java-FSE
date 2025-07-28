# Control Structures – PL/SQL Exercises

This folder contains PL/SQL scripts demonstrating control structures for common banking scenarios.

## Scenario 1: Apply Discount to Loan Interest Rates
**File:** `scenario1_apply_discount.sql`
- Loops through all customers.
- If a customer is above 60 years old, applies a 1% discount to their current loan interest rates.

**Sample Output:**
```
-- No direct output. The interest rates in the LOANS table are updated for eligible customers.
```

---

## Scenario 2: Promote Customers to VIP Status
**File:** `scenario2_vip_promotion.sql`
- Iterates through all customers.
- Sets the `IsVIP` flag to TRUE for those with a balance over $10,000.

**Sample Output:**
```
-- No direct output. The ISVIP flag in the CUSTOMERS table is updated for eligible customers.
```

---

## Scenario 3: Loan Due Reminders
**File:** `scenario3_loan_reminders.sql`
- Fetches all loans due in the next 30 days.
- Prints a reminder message for each customer whose loan is due soon.

**Sample Output:**
```
Reminder: Loan 101 for customer John Doe is due on 15-JUN-2024
Reminder: Loan 205 for customer Jane Smith is due on 28-JUN-2024
```

---

## How to Run
1. Open your Oracle SQL environment (SQL*Plus, SQLcl, or SQL Developer).
2. Enable output for reminders: `SET SERVEROUTPUT ON;`
3. Execute each script in order:
   - `@scenario1_apply_discount.sql`
   - `@scenario2_vip_promotion.sql`
   - `@scenario3_loan_reminders.sql`

**Note:** Ensure your database has the required `CUSTOMERS` and `LOANS` tables with appropriate columns. 