import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [token, setToken] = useState('');

  const handleLogout = () => {
    setToken('');
  };

  return (
    <div className="App">
      {token ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
