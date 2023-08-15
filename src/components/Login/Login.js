import React, { useState } from 'react';
import authService from '../../api/authService';
import './Login.css';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authService.login(username, password);
      if (response.success) {
        setToken(response.token);
        alert('Login successful!');
      } else {
        alert('Authentication problem');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please check console.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
