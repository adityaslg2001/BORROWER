import React from 'react'
import './ContactUs.css';
<link
  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
  rel='stylesheet'
/>;

export default function ContactUs() {
  return (
    <div className='contactus-container'>
      <h2 className='contactus-heading'>Contact Us</h2>

      <ul className='contactus-list'>
        <li>
          <i className='fas fa-phone contactus-icon-phone'></i>
          Phone: <a href='tel:abc-eefg-xyg'>abc-eefg-xyg</a>
        </li>
        <li>
          <i className='fas fa-envelope contactus-icon-email'></i>
          Email: <a href='mailto:borrower@gmail.com'>borrower@gmail.com</a>
        </li>
        <li>
          <i className='fas fa-map-marker-alt contactus-icon-location'></i>
          Location: Jadavpur Thana
        </li>
      </ul>
    </div>
  );
}
