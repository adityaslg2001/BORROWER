import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignedIn from "../signedIn/SignedIn";


export default function HomeHeader() {

  const location = useLocation();
  const navigate = useNavigate();

  // Get username from localStorage
  const storedUsername = location.state?.username || localStorage.getItem("username");
  console.log(storedUsername);
  const pathName = window.location.pathname;
  console.log(pathName);
  useEffect(() => {
    if (!storedUsername && pathName !== "/aboutus") {
      console.log("No username found! Redirecting to error page.");
      navigate("/error");
    }
  }, [storedUsername, navigate]);

  // Prevent rendering if no username is available
  if (!storedUsername) {
    return null;
  }


  
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark nav-clr'>
        <div className='container cc1'>
          <Link className='navbar-brand' to='/'>
          <h2 className='img-contain'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <defs></defs>
          <g>
            <g>
              <path fill="#fff" d="M31.12,7.58a11.26,11.26,0,0,0-6-1.4H6.16v27.2L0,27.22V0H18.92C22,0,24.24.54,26,2.34L31.2,7.5ZM32.8,9.1l5.4,5.4a6.51,6.51,0,0,1,1.72,4.8v.64c0,3-.92,4.36-3.84,4.88v.36l2.56,2.56a5.21,5.21,0,0,1,1.36,4v1.32c0,4.8-3.2,7-8.68,7H12.8L6.64,33.86H25.16c5.48,0,8.68-2.16,8.68-7V25.58c0-3.72-1.68-5.36-6.52-5.52V19.3c4.84-.16,6.44-1.8,6.44-5.52v-.64a7.14,7.14,0,0,0-1-4ZM15.44,11.82h6.08c2.32,0,3,.6,3,2.52v.2c0,1.92-.72,2.52-3,2.52H15.44Zm0,16.4V22.7h6.08c2.32,0,3,.6,3,2.52v.48c0,1.92-.72,2.52-3,2.52Z"></path>
              <path fill="#fff" d="M26.54.34V0h1.7V.34H27.6V2h-.4V.34ZM29.14,0l.5,1.42L30.16,0h.56V2h-.36V.4L29.8,2h-.32L28.92.4V2h-.36V0Z"></path>
            </g>
          </g>
        </svg>
        
        </h2> 
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
                <SignedIn username={storedUsername}/>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border-top"/>
    </div>
  );
}
