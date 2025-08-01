import React, { useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div className="auth-container">
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout} />
        ) : (
          <LoginButton onClick={handleLogin} />
        )}
      </div>
      
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;