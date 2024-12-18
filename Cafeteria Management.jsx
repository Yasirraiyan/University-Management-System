import React, { useState } from 'react';

function Menu({ addItemToOrder }) {
  const [menuItem, setMenuItem] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    addItemToOrder(menuItem, price);
    setMenuItem("");
    setPrice("");
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <form onSubmit={handleAddItem}>
        <label>Item Name:</label>
        <input 
          type="text" 
          value={menuItem} 
          onChange={(e) => setMenuItem(e.target.value)} 
          placeholder="Enter item name" 
        />
        <br />
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Enter price" 
        />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Menu;
