import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="branding">
          <h1 className="branding-title">Borrower.</h1>
          <p className="branding-tagline">Connect. Borrow. Lend. Thrive.</p>
        </div>
        {/* Links Section */}
        <div className="links-container">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contactUs">Contact</a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/contactUs">Open Source</a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="footer-column">
            <h3>Social Media</h3>
            <ul className="social-icons">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Borrower. Built for community.</p>
      </div>
    </footer>
  );
};

export default Footer;
