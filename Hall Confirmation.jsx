import React, { useState } from 'react';
import './styles.css';

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hall, setHall] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();
    if (name === "" || date === "" || hall === "") {
      alert("Please fill all fields!");
      setConfirmation("");
    } else {
      setConfirmation(`Reservation confirmed for ${name} on ${date} at ${hall} hall.`);
    }
  };

  return (
    <div className="App">
      <h1>Hall Confirmation Form</h1>
      <form onSubmit={handleConfirm}>
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Date:</label>
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label>Hall:</label>
        <select 
          value={hall}
          onChange={(e) => setHall(e.target.value)}
        >
          <option value="">Select a hall</option>
          <option value="Main Hall">Main Hall</option>
          <option value="Conference Hall">Conference Hall</option>
          <option value="Banquet Hall">Banquet Hall</option>
        </select>
        <br />
        <button type="submit">Confirm Reservation</button>
      </form>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
}

export default App;
