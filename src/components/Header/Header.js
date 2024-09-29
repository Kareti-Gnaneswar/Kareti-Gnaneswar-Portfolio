// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Kareti Gnaneswar</h1>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link 
              activeClass="active" 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              activeClass="active" 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              activeClass="active" 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              activeClass="active" 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
