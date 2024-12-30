import React from "react";
import "./AuthPage.css";

import { Link, useNavigate } from "react-router-dom";
import Footer from "./Header&Footer/Footer";
import { useState } from "react";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function LoginupPage() {
    
    
    //USE-STATE for input fields
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
  
    const navigate = useNavigate();
  
    const signMeIn = ()=>{
      if (!username || !password) {
        toast.error("Both username and password are required!");
        // return;
      }
      console.log({
        username,password
      });
      const url = 'http://localhost:5000/login';
      const data = {username,password};
      axios.post(url,data)
      .then((res)=>{
        console.log(res.data);
        if(res.data.message === "User not found!")
        {
          toast.error("User not found. Please check your username.");
        } 
        else if(res.data.message === "Password entered incorrectly!") 
        {
          toast.error("Incorrect password. Please try again.");
        } 
        else if (res.data.message === "User found successfully." && res.data.token){
          toast.success(res.data.message);
          if(res.data.token){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem("username", username);
            setusername("");
            setpassword(""); 
            setTimeout(()=>{
              console.log("Navigating to home with username:", username);
              navigate('/home' ,{state: {username}});
            },3000);
            
          }
        }
      })
      .catch((err) => {
        console.error("Axios error:", err.response?.data || err.message);
        toast.error(err.response?.data?.message || "An error occurred!");
      });
  
    };

  return (
    <div className="auth-page">
      
      <div className="logo-container">
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
      
      
      <div className="auth-container">
        <h2 className="auth-title">Login to your account</h2>
    
          <div className="auth-input-group">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" placeholder="Enter your username" value={username} 
            onChange={(event)=>{
              setusername(event.target.value);
            }}
            />
          </div>
          <div className="auth-input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={password} 
            onChange={(event)=>{
              setpassword(event.target.value);
            }}
            />
          </div>
          <button type="submit" className="auth-button" onClick={signMeIn}>Login</button>
      
        <p className="auth-footer">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default LoginupPage;
