// src/pages/MenuPage.js
import React from 'react';
import croissant from '../assets/croissant.jpg';
import eclair from '../assets/eclair.jpg';
import macaron from '../assets/macaron.jpg';
import cinnamonRoll from '../assets/cinnamon-roll.jpg';
import scone from '../assets/scone.jpg';
import cupcake from '../assets/cupcake.jpg';
import tart from '../assets/tart.jpg';
import donut from '../assets/donut.jpg';
import pie from '../assets/pie.jpg';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        <li className="menu-item">
          <img src={croissant} alt="Croissant" />
          <p>Croissant</p>
        </li>
        <li className="menu-item">
          <img src={eclair} alt="Eclair" />
          <p>Eclair</p>
        </li>
        <li className="menu-item">
          <img src={macaron} alt="Macaron" />
          <p>Macaron</p>
        </li>
        <li className="menu-item">
          <img src={cinnamonRoll} alt="Cinnamon Roll" />
          <p>Cinnamon Roll</p>
        </li>
        <li className="menu-item">
          <img src={scone} alt="Scone" />
          <p>Scone</p>
        </li>
        <li className="menu-item">
          <img src={cupcake} alt="Cupcake" />
          <p>Cupcake</p>
        </li>
        <li className="menu-item">
          <img src={tart} alt="Tart" />
          <p>Tart</p>
        </li>
        <li className="menu-item">
          <img src={donut} alt="Donut" />
          <p>Donut</p>
        </li>
        <li className="menu-item">
          <img src={pie} alt="Pie" />
          <p>Pie</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
