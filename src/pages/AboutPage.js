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
        alt="Historic bakery exterior" 
        className="about-image" 
      />
      <p>
        Our bakery has been serving the community since 1990, providing the freshest and most delicious pastries.
        Our mission is to make every day a little sweeter with our homemade treats.
      </p>
      <img 
        src={bakingProcess} 
        alt="Baking in progress" 
        className="about-image" 
      />
      <img 
        src={teamPhoto} 
        alt="Our bakery team" 
        className="about-image" 
      />
    </div>
  );
};

export default AboutPage;
