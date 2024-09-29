// src/components/Projects/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod.',
    image: '/images/project1.png',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod.',
    image: '/images/project2.png',
    link: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod.',
    image: '/images/project2.png',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index} onClick={() => handleToggle(index)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p className={`description ${expandedIndex === index ? 'show' : ''}`}>
              {project.description.length > 100 && expandedIndex !== index 
                ? `${project.description.substring(0, 100)}...` 
                : project.description}
            </p>
            {project.description.length > 100 && (
              <button className={`more-btn ${expandedIndex === index ? 'expanded' : ''}`} onClick={(e) => {
                e.stopPropagation(); // Prevent the card from toggling
                handleToggle(index);
              }}>
                {expandedIndex === index ? 'Show Less' : 'More'}
              </button>
            )}
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
