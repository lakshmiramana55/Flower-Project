import React from 'react';
import plant from '../assests/images/PLANT.jpeg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>React App</h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1>Welcome to My React App!</h1>
        <p>Start building your dream project with React.</p>

        {/* Category Box */}
        <div className="category-box">
          <div className="category-card">
            <img src={plant} alt="Category 1" />
            <p>Plants</p>
            <button className="category-btn">Explore</button>
          </div>
          <div className="category-card">
            <img src={plant} alt="Category 2" />
            <p>Flowers</p>
            <button className="category-btn">Explore</button>
          </div>
          <div className="category-card">
            <img src={plant} alt="Category 3" />
            <p>Pickles</p>
            <button className="category-btn">Explore</button>
          </div>
          <div className="category-card">
            <img src={plant} alt="Category 4" />
            <p>Handmade Crafts</p>
            <button className="category-btn">Explore</button>
          </div>
        </div>
      </div>

      {/* Scrolling Advertisement */}
      <div className="ad-banner">
        <span>🌱 Buy Plants Today! 🌸 Fresh Flowers at Discount!</span>
        <span>✨ Handcrafted Crafts Available! 🎁 Pickles to Taste!</span>
      </div>
    </div>
  );
};

export default Home;
