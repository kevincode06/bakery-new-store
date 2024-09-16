// src/pages/AboutPage.js
import React from 'react';
import historicBakery from '../assets/historic-bakery.jpg'; 
import bakingProcess from '../assets/baking-process.jpg'; 
import teamPhoto from '../assets/team-photo.jpg'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <img 
        src={historicBakery} 
        alt="Exterior view of our historic bakery" 
        className="about-image" 
      />
      <p>
        Our bakery has been serving the community since 1990, providing the freshest and most delicious pastries.
        Our mission is to make every day a little sweeter with our homemade treats.
      </p>
      <img 
        src={bakingProcess} 
        alt="Our team engaged in the baking process" 
        className="about-image" 
      />
      <img 
        src={teamPhoto} 
        alt="Photo of our friendly bakery team" 
        className="about-image" 
      />
    </div>
  );
};

export default AboutPage;
