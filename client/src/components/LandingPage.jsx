import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header&Footer/Header.jsx";
import Features from "./Features.jsx";
import Footer from "./Header&Footer/Footer.jsx";

function LandingPage() {
  return (
    <div>
      <Header/>
      <hr className="border-top"/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default LandingPage;

