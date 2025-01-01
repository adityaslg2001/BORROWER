import React, { useState } from 'react';
import './ContactUs.css';
import { Navigate, useNavigate } from "react-router-dom";
import Header from '../Header&Footer/Header';
import HomeHeader from '../home/HomeHeader';
import { LinearGradient } from 'react-text-gradients';


const ContactUs = () => {
  const isAuthenticated = () => localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We’ll get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    {isAuthenticated() ? <HomeHeader /> : <Header />}
    <div className="contact-page">
      <header className="contact-header">
        <h1>
        <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
        Contact Us
        </LinearGradient>
        </h1>
        <p>Have a question, feedback, or just want to say hi? Let’s connect!</p>
      </header>

      <div className="contact-sections">
        <section className="contact-form-section">
          <h2>
          Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>

        <section className="location-section">
          <h2>Where To Find Us</h2>
          <div className="location-content">
            <p>
              Borrower HQ is located in the vibrant heart of the city. Whether
              you’re near or far, feel free to drop by or connect with us online!
            </p>
            <div className="location-map">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.141139894462!2d88.36883737398256!3d22.498887135670536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1735643098268!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
    <footer className="contact-footer">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/careers">Careers</a>
        </div>
        <hr></hr>
        <p>© {new Date().getFullYear()} Borrower. Built for community.</p>
      </footer>
    </>
  );
};

export default ContactUs;
