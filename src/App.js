import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assests/styles.css';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import './styles/navbar.css';
import './styles/home.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
