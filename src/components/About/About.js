// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am <span className="highlight">Kareti Gnaneswar</span>, a passionate <span className="highlight">Data Analyst</span> with a strong foundation in data analysis and visualization. 
          Currently pursuing my degree with a CGPA of <span className="highlight">8.67</span> from SVCE College, I have developed a solid understanding of data-driven decision-making.
        </p>
        <p>
          My technical skills include proficiency in <span className="highlight">SQL</span> for database management, <span className="highlight">Tableau</span> for data visualization, and <span className="highlight">Python</span> for data analysis using libraries like <span className="highlight">NumPy</span>, <span className="highlight">Pandas</span>, and <span className="highlight">Matplotlib</span>. 
          I enjoy leveraging these tools to extract insights and solve complex problems.
        </p>
        <p>
          As a <span className="highlight">Mobile Application Developer Intern</span> at <span className="highlight">Bodha Software Technologies</span>, I am currently working on developing a cross-platform mobile application using <span className="highlight">React Native</span>. 
          This experience has honed my ability to integrate <span className="highlight">RESTful APIs</span> and ensure seamless data communication between the frontend and backend.
        </p>
        <p>
          In my recent project, I developed a <span className="highlight">Django web app</span> for house price prediction, utilizing <span className="highlight">regression algorithms</span> to provide accurate price estimates based on various features such as location, size, and amenities. 
          This project not only enhanced my technical skills but also allowed me to apply <span className="highlight">machine learning</span> concepts to real-world challenges.
        </p>
        <p>
          Beyond my technical expertise, I am a <span className="highlight">technology enthusiast</span> with a keen interest in continuous learning. 
          I enjoy playing <span className="highlight">chess</span> in my free time, which helps me sharpen my problem-solving skills and strategic thinking.
        </p>
      </div>
    </section>
  );
}

export default About;
