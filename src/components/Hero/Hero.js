// src/components/Hero/Hero.js
import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Hello, I'm a Data Analyst</h2>
        <p>Specializing in data visualization and analysis, with experience in developing mobile applications.</p>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="btn"
        >
          My Work
        </Link>
        <div className="hero-image-container">
          <img src={`${process.env.PUBLIC_URL}/my-image.jpeg`} alt="Kareti Gnaneswar" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
