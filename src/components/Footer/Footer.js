// src/components/Footer/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kateti-Gnaneswar. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Kareti-Gnaneswar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} /> {/* Use the GitHub icon */}
        </a>
        <a href="https://www.linkedin.com/in/kareti-gnaneswar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} /> {/* Use the LinkedIn icon */}
        </a>
        {/* Add more social links as needed */}
      </div>
    </footer>
  );
}

export default Footer;
