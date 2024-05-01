import React from 'react';
import Navbar from '../components/Navbar';
import "../css/HomePage.css"


const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className="home" id="home">
      <div className="content">
        <h3>Amaka Bakery</h3>
        <span>Delicious Homemade Treats</span>
        <p>
          Welcome to Amaka Bakery, where we create mouthwatering homemade treats that fill your senses with delight. From freshly baked bread to decadent pastries, our artisanal creations are made with love and care.
        </p>
        <a href="#products" className="btn">Explore Treats</a>
      </div>
    </section>
    </div>
  );
};

export default HomePage;
