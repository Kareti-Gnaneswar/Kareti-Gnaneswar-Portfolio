// src/components/Contact/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    mobile: '',      
    linkedin: '',    
    github: '',      
    message: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs.send('service_sauoki5', 'template_qpdjdvw', formData, 'b2YxlKYFf87OpxWD6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent!');
        setFormData({ name: '', email: '', mobile: '', linkedin: '', github: '', message: '' });
      }, (err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you're interested in collaborating or have a project in mind, I'd love to hear from you! Let's work together to turn your ideas into reality. Your vision could be just a message away!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="tel" 
          name="mobile" 
          placeholder="Your Mobile Number" 
          value={formData.mobile}
          onChange={handleChange}
          required 
        />
        <input 
          type="url" 
          name="linkedin" 
          placeholder="Your LinkedIn Profile URL" 
          value={formData.linkedin}
          onChange={handleChange}
        />
        <input 
          type="url" 
          name="github" 
          placeholder="Your GitHub Profile URL" 
          value={formData.github}
          onChange={handleChange}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required 
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
