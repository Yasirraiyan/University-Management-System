import React, { useState } from 'react';
import './styles.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials for demonstration
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      setError("");
      alert("Login successful!");
      // Proceed to the next step, such as redirecting to another page
    } else {
      setError("Invalid username or password");
    }
  };

  

export default App;
