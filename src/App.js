import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
/* 暫時隱藏 NotFound (未來為404準備) */
// import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/personal-website" className="nav-logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
        </Link>
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/personal-website" className="nav-link">Home</Link></li>
          <li><Link to="/personal-website/about" className="nav-link">About</Link></li>
          <li><Link to="/personal-website/projects" className="nav-link">Projects</Link></li>
          {/* 暫時隱藏 Skills */}
          {/* <li><Link to="/personal-website/skills" className="nav-link">Skills</Link></li> */}
          <li><Link to="/personal-website/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/personal-website" element={<Home />} />
        <Route path="/personal-website/about" element={<About />} />
        <Route path="/personal-website/projects" element={<Projects />} />
        <Route path="/personal-website/contact" element={<Contact />} />
        {/* 暫時隱藏 NotFound (未來為404準備) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

