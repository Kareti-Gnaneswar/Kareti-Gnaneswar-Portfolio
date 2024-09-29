// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', rating: 4.5 },
  { name: 'React', rating: 4.0 },
  { name: 'Node.js', rating: 3.5 },
  { name: 'CSS', rating: 4.0 },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            {/* Removed the icon image */}
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(skill.rating / 5) * 100}%` }}
              />
            </div>
            <span className="rating-score">{skill.rating}/5</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
