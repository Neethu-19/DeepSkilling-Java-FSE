-- Insert sample customers
INSERT INTO customers VALUES (1, 'John Doe', 65, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 'Jane Smith', 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 'Alice Brown', 70, 15000, 'FALSE');
INSERT INTO customers VALUES (4, 'Bob White', 30, 5000, 'FALSE');

-- Insert sample loans
INSERT INTO loans VALUES (101, 1, 8.5, SYSDATE + 10);   -- Due in 10 days
INSERT INTO loans VALUES (102, 2, 9.0, SYSDATE + 40);   -- Due in 40 days
INSERT INTO loans VALUES (103, 3, 7.5, SYSDATE + 25);   -- Due in 25 days
INSERT INTO loans VALUES (104, 4, 10.0, SYSDATE + 5);   -- Due in 5 days

COMMIT; 