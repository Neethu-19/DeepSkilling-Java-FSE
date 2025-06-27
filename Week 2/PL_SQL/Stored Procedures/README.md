# Stored Procedures – PL/SQL Exercises

This folder contains PL/SQL stored procedures for common banking scenarios.

## Scenario 1: Process Monthly Interest
**File:** `process_monthly_interest.sql`
- Updates the balance of all savings accounts by applying a 1% interest rate.

**Usage:**
```sql
EXEC ProcessMonthlyInterest;
```

**Sample Output:**
```
-- No direct output. The BALANCE in the ACCOUNTS table is updated for all savings accounts.
```

---

## Scenario 2: Update Employee Bonus
**File:** `update_employee_bonus.sql`
- Updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.

**Usage:**
```sql
EXEC UpdateEmployeeBonus(10, 5); -- Adds 5% bonus to all employees in department 10
```

**Sample Output:**
```
-- No direct output. The SALARY in the EMPLOYEES table is updated for eligible employees.
```

---

## Scenario 3: Transfer Funds
**File:** `transfer_funds.sql`
- Transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.

**Usage:**
```sql
EXEC TransferFunds(101, 102, 500); -- Transfers 500 from account 101 to 102
```

**Sample Output:**
```
-- No direct output. Raises an error if insufficient funds.
```

---

## How to Run
1. Open your Oracle SQL environment (SQL*Plus, SQLcl, or SQL Developer).
2. Execute the procedure scripts to create them.
3. Call the procedures as shown above.

**Note:** Ensure your database has the required `ACCOUNTS` and `EMPLOYEES` tables with appropriate columns. 