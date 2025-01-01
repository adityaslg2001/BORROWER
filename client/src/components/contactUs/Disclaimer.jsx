import React from 'react';
import './Disclaimer.css';
import Footer from '../Header&Footer/Footer';

export const Disclaimer = () => {
  return (
    <div>
    <div className="disclaimer-container">
      <header className="disclaimer-container__header">
        <h1>Disclaimer</h1>
        <p className="disclaimer-container__last-updated">Last updated: December 31, 2024</p>
      </header>
      <section className="disclaimer-container__section">
        <h2>Interpretation and Definitions</h2>
        <div className="disclaimer-container__section-content">
          <h3>Interpretation</h3>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>
          <h3>Definitions</h3>
          <p>For the purposes of this Disclaimer:</p>
          <ul>
            <li><strong>Company</strong> refers to Borrower Inc., 6B Friends Row, Jadavpur University, Kolkata - 700156.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            <li><strong>Website</strong> refers to Borrower, accessible from <a href="https://borrower.com" target="_blank" rel="noopener noreferrer">borrower.com</a></li>
          </ul>
        </div>
      </section>
      <section className="disclaimer-container__section">
        <h2>Disclaimer</h2>
        <p>The information contained on the Service is for general information purposes only.</p>
        <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
        <p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p>
        <p>The Company does not warrant that the Service is free of viruses or other harmful components.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>External Links Disclaimer</h2>
        <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
        <p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Errors and Omissions Disclaimer</h2>
        <p>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Fair Use Disclaimer</h2>
        <p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
        <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>Views Expressed Disclaimer</h2>
        <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</p>
        <p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>No Responsibility Disclaimer</h2>
        <p>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services.</p>
        <p>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use of the Service.</p>
      </section>
      <section className="disclaimer-container__section">
        <h2>"Use at Your Own Risk" Disclaimer</h2>
        <p>All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied.</p>
        <p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service.</p>
      </section>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Disclaimer;
