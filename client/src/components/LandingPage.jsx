import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header&Footer/Header.jsx";
import Features from "./features/Features.jsx";
import Footer from "./Header&Footer/Footer.jsx";
import HomeHeader from "./home/HomeHeader.jsx";

function LandingPage() {

  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <div>
      {isAuthenticated() ? <HomeHeader/> : <Header/>}
      <Features/>
      <Footer/>
    </div>
  );
}

export default LandingPage;

