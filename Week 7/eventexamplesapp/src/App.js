import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Method to increment the counter value
  const incrementValue = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Method to say Hello with a static message
  const sayHello = () => {
    alert("Hello! Member!");
  };

  // Method that combines both increment and sayHello functionality
  const handleIncrement = () => {
    incrementValue(); // Increment the value
    sayHello(); // Say Hello followed by a static message
  };

  // Method to decrement the counter value
  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  // Method to say welcome
  const sayWelcome = () => {
    alert("welcome");
  };

  // Method to handle click event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Examples App</h1>
        
        <div className="main-content">
          <div className="counter-section">
            <h2>{counter}</h2>
            
            <div className="button-group">
              <button 
                className="btn btn-increment" 
                onClick={handleIncrement}
              >
                Increment
              </button>
              
              <button 
                className="btn btn-decrement" 
                onClick={handleDecrement}
              >
                Decrement
              </button>

              <button 
                className="btn btn-welcome" 
                onClick={sayWelcome}
              >
                Say welcome
              </button>

              <button 
                className="btn btn-click" 
                onClick={handleClick}
              >
                Click on me
              </button>
            </div>
          </div>

          <CurrencyConvertor />
        </div>

        <div className="info-section">
          <p>
            Button functionalities:
          </p>
          <ul>
            <li><strong>Increment:</strong> Increases counter + shows "Hello! Member!"</li>
            <li><strong>Decrement:</strong> Decreases counter value</li>
            <li><strong>Say welcome:</strong> Shows "welcome" alert</li>
            <li><strong>Click on me:</strong> Shows "I was clicked" alert</li>
            <li><strong>Currency Convertor:</strong> Converts Indian Rupees to Euro</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
