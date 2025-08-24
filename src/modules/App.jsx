import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/App.css';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ScrollToHashElement from './ScrollToHashElement';
import AboutUsDetail from './AboutUsDetail';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <ScrollToHashElement />
      <div id="navigation">
        <nav className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/product" onClick={closeMenu}>Our Product</Link></li>
            <li><a href="/#footer" onClick={closeMenu}>Contact us</a></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsDetail />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
