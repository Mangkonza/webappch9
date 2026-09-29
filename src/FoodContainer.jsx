import { useState } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import './App.css';

const FoodContainer = () => {
  const initialFood = [
    { name: "cake", price: 35, isBestSeller: true },
    { name: "bread", price: 25, isBestSeller: false },
    { name: "milk", price: 15, isBestSeller: true },
    { name: "donut", price: 45, isBestSeller: false },
    { name: "cookie", price: 55, isBestSeller: true },
  ];

  const [food, setFood] = useState(initialFood);
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'admin');

  const toggleMode = () => {
    const nextMode = mode === 'admin' ? 'user' : 'admin';
    setMode(nextMode);
    localStorage.setItem('mode', nextMode);
  };

  const deleteItem = (indexToDelete) => {
    const result = food.filter((item, index) => index !== indexToDelete);
    setFood(result);
  };

  const addItem = (newItem) => {
    const result = [...food, newItem];
    setFood(result);
  };

  return (
    <div>
      <div className="mode-bar">
        <span className="mode-text">
          {mode === 'admin' ? "Admin Mode" : "User Mode"}
        </span>
        <button onClick={toggleMode}>
          {mode === 'admin' ? "User" : "Admin"}
        </button>
      </div>

      <h3>Our Menu</h3>
      <FoodList food={food} deleteItem={deleteItem} mode={mode} />

      {mode === 'admin' && <FoodForm addItem={addItem} />}
    </div>
  );
};

export default FoodContainer;