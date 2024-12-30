import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "./../Header&Footer/Header";
import Footer from "../Header&Footer/Footer";
import CustomCard from "./CustomCard";
import "./AboutUs.css";
import AboutUsCompany from "./AboutUsCompany";
import HomeHeader from "../home/HomeHeader.jsx";

export default function AboutUs() {

  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

    

  return (
    <>
      {isAuthenticated() ? <HomeHeader/> : <Header/>}
      <div className='aboutus-body'>
        <div className='aboutus-title'>About Us</div>
        <AboutUsCompany />
        <div id='about-devs'>
          <CardGroup>
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </CardGroup>
        </div>
      </div>
    </>
  );
}
