import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    // Fetch data from your API or JSON file
    fetch('data/laptops.json')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of laptops
        setLaptops(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Laptops</h1>
      <ul>
        {laptops.slice(0, 10).map((laptop, index) => (
          <li key={index}>
            <h2>{laptop.name}</h2>
            <p>Price: {laptop.price}</p>
            <p>Processor: {laptop.processor}</p>
            <p>RAM: {laptop.ram}</p>
            <p>Storage: {laptop.storage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

