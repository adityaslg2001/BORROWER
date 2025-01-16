import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header&Footer/Header.jsx";
import Features from "./features/Features.jsx";
import Footer from "./Header&Footer/Footer.jsx";
import HomeHeader from "./home/HomeHeader.jsx";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";

function LandingPage() {

  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <div>
      {isAuthenticated() ? <HomeHeader/> : <Header/>}
      <Features/>
      <FeaturedCategories/>
      <Testimonials/>
      <Footer/>

    </div>
  );
}

export default LandingPage;

