-- Create ACCOUNTS table
CREATE TABLE accounts (
    account_id    NUMBER PRIMARY KEY,
    account_type  VARCHAR2(20),
    balance       NUMBER
);

-- Create EMPLOYEES table
CREATE TABLE employees (
    employee_id    NUMBER PRIMARY KEY,
    name           VARCHAR2(100),
    department_id  NUMBER,
    salary         NUMBER
); 