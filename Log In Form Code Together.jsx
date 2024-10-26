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
       if (username === "" && password === "") {
      setError("Please fill the field first!");
      alert("Please fill the field first!");
           console.log("Please fill the field first!")
      // Proceed to the next step, such as redirecting to another page
    } 

    if (username === validUsername && password === validPassword) {
      setError("");
      alert("Login successful!");
      // Proceed to the next step, such as redirecting to another page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <h1>Log In Form</h1>
      <form onSubmit={handleLogin}>
        <label>User Name:</label>
        <input 
          type="text" 
          placeholder="Enter your username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
