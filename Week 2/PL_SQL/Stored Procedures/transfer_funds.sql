CREATE OR REPLACE PROCEDURE TransferFunds(
  p_from_account IN NUMBER,
  p_to_account   IN NUMBER,
  p_amount       IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  -- Check if source account has sufficient balance
  SELECT balance INTO v_balance FROM accounts WHERE account_id = p_from_account FOR UPDATE;
  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
  END IF;

  -- Deduct from source
  UPDATE accounts
     SET balance = balance - p_amount
   WHERE account_id = p_from_account;

  -- Add to destination
  UPDATE accounts
     SET balance = balance + p_amount
   WHERE account_id = p_to_account;

  COMMIT;
END;
/ 