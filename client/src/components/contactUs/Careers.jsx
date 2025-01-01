import React from 'react';
import './Careers.css';
import HomeHeader from '../home/HomeHeader';
import Header from '../Header&Footer/Header';
import { Navigate, useNavigate } from "react-router-dom";

export const Careers = () => {
  const isAuthenticated = () => localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  return (
    <div>
    {isAuthenticated() ? <HomeHeader /> : <Header />}
    <div className="careers-container">
      <header className="careers-header">
        <h1>Join the Borrower Team</h1>
        <p>
          Shape the future of borrowing and lending! We're on the lookout for passionate individuals ready to make a difference.
        </p>
        <button className="careers-header__cta">View Open Positions</button>
      </header>

      <section className="careers-values">
        <h2>Our Values</h2>
        <div className="careers-values__cards">
          <div className="careers-value-card">
            <h3>Innovation</h3>
            <p>We thrive on pushing boundaries and creating cutting-edge solutions.</p>
          </div>
          <div className="careers-value-card">
            <h3>Collaboration</h3>
            <p>Great ideas come from teamwork. Together, we achieve greatness.</p>
          </div>
          <div className="careers-value-card">
            <h3>Empathy</h3>
            <p>Understanding user needs drives everything we do.</p>
          </div>
        </div>
      </section>

      <section className="careers-positions">
        <h2>Open Positions</h2>
        <div className="careers-positions__list">
             <div className="careers-position">
            <h3>Frontend Developer</h3>
            <p>Build intuitive user interfaces using React and modern frameworks.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>Bluntend Developer</h3>
            <p>Spearhead sharpening a blunt knife very quickly.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>Backend Engineer</h3>
            <p>Design scalable APIs and maintain robust databases for our platform.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>HTML Scientist</h3>
            <p>Create HTML that does not exists.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>CSS Research Analyst - II</h3>
            <p>Must know how to do jumping jacks and bring Raju from school every Tuesday.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>Boss Level Mechanic</h3>
            <p>Must know how to build Iron Man suit in a cave.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
          <div className="careers-position">
            <h3>ArchMaster Janitor - IV</h3>
            <p>Must Know - Python, COBOL, RubyOnRails, Advanced Java, Advanced Multivariable Calculus Of Precision, C++, C, Tailwind, Go, NodeJS, Advanced LLM and take Raju to school every Tuesday.</p>
            <button className="careers-position__apply">Apply Now</button>
          </div>
        </div>
      </section>

      <section className="careers-perks">
        <h2>Why Work With Us?</h2>
        <ul className="careers-perks__list">
          <li>📈 Competitive Salary and Growth Opportunities</li>
          <li>🌎 Work from Anywhere</li>
          <li>🎉 Fun and Inclusive Work Culture</li>
          <li>💼 Personalized Career Development Plans</li>
          <li>💻 State-of-the-art Tools and Resources</li>
        </ul>
      </section>

      <footer className="careers-footer">
        <h3>Got Questions?</h3>
        <p>Email us at <a href="mailto:careers@borrower.com">careers@borrower.com</a></p>
      </footer>
    </div>
    </div>
  );
};

export default Careers;
