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

    // Define template parameters that match your EmailJS template
    const templateParams = {
      to_name: 'Your Name or Team',  // Replace with the recipient's name or team name
      from_name: formData.name,
      from_email: formData.email,
      from_mobile: formData.mobile,
      from_linkedin: formData.linkedin,
      from_github: formData.github,
      message: formData.message
    };

    // Log the templateParams to verify data before sending
    console.log('Sending email with the following data:', templateParams);

    // Use EmailJS to send the email
    emailjs.send('service_sauoki5', 'template_qpdjdvw', templateParams, 'b2YxlKYFf87OpxWD6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Reset the form after successful submission
        setFormData({ name: '', email: '', mobile: '', linkedin: '', github: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you're interested in collaborating or have a project in mind, I'd love to hear from you! 
        Let's work together to turn your ideas into reality. Your vision could be just a message away!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Your Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label htmlFor="mobile">Your Mobile Number</label>
        <input 
          type="tel" 
          id="mobile"
          name="mobile" 
          placeholder="Your Mobile Number" 
          value={formData.mobile}
          onChange={handleChange}
          required 
        />

        <label htmlFor="linkedin">Your LinkedIn Profile URL</label>
        <input 
          type="url" 
          id="linkedin"
          name="linkedin" 
          placeholder="Your LinkedIn Profile URL" 
          value={formData.linkedin}
          onChange={handleChange}
        />

        <label htmlFor="github">Your GitHub Profile URL</label>
        <input 
          type="url" 
          id="github"
          name="github" 
          placeholder="Your GitHub Profile URL" 
          value={formData.github}
          onChange={handleChange}
        />

        <label htmlFor="message">Your Message</label>
        <textarea 
          name="message" 
          id="message"
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
