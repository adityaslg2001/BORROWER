import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage.jsx";
import LoginupPage from "./LoginupPage.jsx";
import SignupPage from "./SignupPage.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";
import AboutUs  from "./aboutUs/AboutUs.jsx";
import Home from "./home/Home.jsx";
import ProtectedRoute from "./protectedRoutes.jsx";
import 'font-awesome/css/font-awesome.min.css';
import ErrorPage from "./error/ErrorPage.jsx";
import Privacy from "./contactUs/Privacy.jsx";
import Disclaimer from "./contactUs/Disclaimer.jsx";
import TermsOfService from "./contactUs/TermsOfService.jsx";
import Careers from "./contactUs/Careers.jsx";
import AddProduct from "./addProduct/AddProduct.jsx";
import YourListings from "./yourListings/YourListings.jsx";

function App1() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contactus" element={<ContactUs/> } />
        <Route path="/aboutus" element={<AboutUs/> } />
        <Route path="/privacy-policy" element={<Privacy/>} /> 
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/terms-of-service" element={< TermsOfService/>} /> 
        <Route path="/careers" element={<Careers/>} />

       
        <Route path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/home/addProduct" element={<AddProduct/>} />
        <Route path="/home/yourListings" element={<YourListings/>} />

        <Route path="/error" element={<ErrorPage/> } />
      </Routes>
    </Router>
  );
}

export default App1;
