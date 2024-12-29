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
      <h2 className='img-contain'>Borrower.</h2> 
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
