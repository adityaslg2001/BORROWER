import React from "react";
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";
import "./AuthPage.css";
import logo from "./lio-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SignupPage() {
  //USE-STATE for input fields
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) =>{
    if(password.length>=8)
    {
      return true;
    }
    else{
      return false;
    }
  }

  const signMeIn = () => {
    if (!validateEmail(emailAddress)) {
      setEmailError("Please enter a valid email address.");
      toast.error("Invalid email address!");
      // return;
    }
    setEmailError("");
    if(!validatePassword(password))
    {
      setpasswordError("Password must be atleast 8 characters long.");
      toast.error("Password must be at least 8 characters long!");
      // return;
    }
    setpasswordError("");
    console.log({
      username,
      emailAddress,
      password,
      password2
    });
    const url = "http://localhost:5000/signup";
    const data = { username, emailAddress, password, password2 };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          toast.success(res.data.message);
          setusername("");
          setpassword(""); 
          setemailAddress("");
          setpassword2("");
          setTimeout(()=>{
            navigate("/login");
          },3000);
          
        }
      })
      .catch((err) => {
        console.error("Axios error:", err.response?.data || err.message);
        toast.error(err.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div className='auth-page'>
      <div className='logo-container'>
        <Link to='/' className='navbar-brand'>
        <h2 className='img-contain'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <defs></defs>
        <g>
          <g>
            <path fill="#fff" d="M31.12,7.58a11.26,11.26,0,0,0-6-1.4H6.16v27.2L0,27.22V0H18.92C22,0,24.24.54,26,2.34L31.2,7.5ZM32.8,9.1l5.4,5.4a6.51,6.51,0,0,1,1.72,4.8v.64c0,3-.92,4.36-3.84,4.88v.36l2.56,2.56a5.21,5.21,0,0,1,1.36,4v1.32c0,4.8-3.2,7-8.68,7H12.8L6.64,33.86H25.16c5.48,0,8.68-2.16,8.68-7V25.58c0-3.72-1.68-5.36-6.52-5.52V19.3c4.84-.16,6.44-1.8,6.44-5.52v-.64a7.14,7.14,0,0,0-1-4ZM15.44,11.82h6.08c2.32,0,3,.6,3,2.52v.2c0,1.92-.72,2.52-3,2.52H15.44Zm0,16.4V22.7h6.08c2.32,0,3,.6,3,2.52v.48c0,1.92-.72,2.52-3,2.52Z"></path>
            <path fill="#fff" d="M26.54.34V0h1.7V.34H27.6V2h-.4V.34ZM29.14,0l.5,1.42L30.16,0h.56V2h-.36V.4L29.8,2h-.32L28.92.4V2h-.36V0Z"></path>
          </g>
        </g>
      </svg></h2> 
        </Link>
      </div>
      <div className='auth-container'>
        <h2 className='auth-title'>Sign Up</h2>

        <div className='auth-input-group'>
          <label htmlFor='name'>Username</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your username'
            value={username}
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
        </div>
        <div className='auth-input-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={emailAddress}
            onChange={(event) => {
              setemailAddress(event.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className='auth-input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
              setpasswordError("");
            }}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className='auth-input-group'>
          <label htmlFor='password'>Re-enter Password</label>
          <input
            type='password'
            id='password'
            placeholder='Re-enter your password'
            value={password2}
            onChange={(event) => {
              setpassword2(event.target.value);
            }}
          />
        </div>
        <button type='submit' className='auth-button' onClick={signMeIn}>
          Sign Up
        </button>

        <p className='auth-footer'>
          Already have an account? <a href='/login'>Login Now</a>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default SignupPage;
