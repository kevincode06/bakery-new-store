// src/pages/HomePage.js
import React from 'react';
import bakeryExterior from '../assets/bakery-exterior.jpg'; // Adjust path as needed

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Bakery!</h1>
      <img src={bakeryExterior} alt="Bakery Exterior" style={{ width: '100%', height: 'auto' }} />
      <p>Delicious pastries made fresh every day. Come visit us!</p>
    </div>
  );
};

export default HomePage;

