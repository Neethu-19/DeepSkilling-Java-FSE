import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  // Method to handle currency conversion
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && currency) {
      // Convert Indian Rupees to Euro (1 Euro ≈ 80 Rupees)
      const convertedAmount = parseFloat(amount) / 80;
      alert(`Converting ${amount} Indian Rupees to ${currency} Amount is ${convertedAmount.toFixed(2)}`);
    } else {
      alert("Please enter both amount and currency");
    }
  };

  return (
    <div className="currency-section">
      <h3>Currency Convertor!!!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in Rupees"
          />
        </div>
        
        <div className="form-group">
          <label>Currency:</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Enter currency (e.g., Euro)"
          />
        </div>
        
        <button type="submit" className="btn btn-submit">
          Convert
        </button>
      </form>
    </div>
  );
}

export default CurrencyConvertor; 