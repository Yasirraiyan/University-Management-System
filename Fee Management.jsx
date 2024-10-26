import React, { useState } from 'react';

function FeeManagement() {
  const [studentName, setStudentName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!studentName || !amount) {
      alert("Please fill in all fields");
      return;
    }
    const newTransaction = { studentName, amount: parseFloat(amount) };
    setTransactions([...transactions, newTransaction]);
    setStudentName("");
    setAmount("");
  };

  return (
    <div className="fee-management">
      <h2>Fee Management</h2>
      <form onSubmit={handleAddTransaction}>
        <label>Student Name:</label>
        <input 
          type="text" 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
          placeholder="Enter student name" 
        />
        <br />
        <label>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount" 
        />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.studentName} - ${transaction.amount.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeeManagement;
