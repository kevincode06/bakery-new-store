// src/pages/AboutPage.js
import React from 'react';
import historicBakery from '../assets/historic-bakery.jpg'; 
import bakingProcess from '../assets/baking-process.jpg'; 
import teamPhoto from '../assets/team-photo.jpg'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <img src={historicBakery} alt="Historic Bakery" style={{ width: '100%', height: 'auto' }} />
      <p>
        Our bakery has been serving the community since 1990, providing the freshest and most delicious pastries.
        Our mission is to make every day a little sweeter with our homemade treats.
      </p>
      <img src={bakingProcess} alt="Baking Process" style={{ width: '100%', height: 'auto' }} />
      <img src={teamPhoto} alt="Team Photo" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default AboutPage;