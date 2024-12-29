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
        <h2 className='img-contain'>Borrower.</h2> 
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
