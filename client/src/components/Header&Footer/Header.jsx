import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';



function Header() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className='navbar navbar-expand-lg navbar-dark nav-clr'>
        <div className='container cc1'>
          <Link className='navbar-brand' to='/'>
            <h2 className='img-contain'>Borrower.</h2> 
          </Link>
          
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          > 
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse whites' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#features'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/aboutus' className='nav-link' href='#about'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contactus' className='nav-link' href='#contact'>
                  Contact Us
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link' href='#categories'>
                  <button class='dropdown-btn'>Categories</button>
                  <div class='dropdown-content'>
                    <a href='#option1'>Option 1</a>
                    <a href='#option2'>Option 2</a>
                    <a href='#option3'>Option 3</a>
                  </div>
                  
                </a>
              </li>
              
              <li className='nav-item'>
                <Link to='/signup' className='btn btn-dark'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;