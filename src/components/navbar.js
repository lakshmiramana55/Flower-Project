import React from 'react';
import { Link } from 'react-router-dom';


const Navbar=()=>{
  return (
    <nav className="navbar">
      <h2>React App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
