import React from 'react';
import './Disclaimer.css';
import Footer from '../Header&Footer/Footer';

export const TermsOfService = () => {
  return (
    <div>
    <div className="disclaimer-container">
      <header className="disclaimer-container__header">
        <h1>Terms of Service</h1>
        <p className="disclaimer-container__last-updated">Last updated: January 1, 2025</p>
      </header>
      <section className="disclaimer-container__section">
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using Borrower, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access or use our Service.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Modification of Terms</h2>
        <p>Borrower reserves the right to update or modify these Terms of Service at any time without prior notice. It is your responsibility to review these terms periodically for changes. Your continued use of the Service after any modifications constitutes acceptance of those changes.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Accounts</h2>
        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these terms, which may result in immediate termination of your account on our Service.</p>
        <p>You are responsible for safeguarding your password and for any activities or actions under your account, whether your password is with our Service or a third-party service.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Use of the Service</h2>
        <p>You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to engage in any activity that:</p>
        <ul>
          <li>Violates any applicable laws or regulations.</li>
          <li>Infringes upon the intellectual property rights of Borrower or any third party.</li>
          <li>Harms, harasses, abuses, or threatens another individual or group.</li>
        </ul>
      </section>
      <section className="disclaimer-container__section">
        <h2>Termination</h2>
        <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Limitation of Liability</h2>
        <p>In no event shall Borrower, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
        <ul>
          <li>Your use of or inability to use the Service.</li>
          <li>Unauthorized access to or use of our servers and/or any personal information stored therein.</li>
          <li>Any interruption or cessation of transmission to or from the Service.</li>
        </ul>
      </section>
      <section className="disclaimer-container__section">
        <h2>Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, you can contact us at <a href="mailto:support@borrower.com">support@borrower.com</a>.</p>
      </section>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default TermsOfService;
