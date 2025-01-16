import React from "react";
import arijoyImg from './imgs/arijoy-img1.jpeg';
import ritishImg from './imgs/ritish-img1.jpeg';
import amanImg from './imgs/aman-img2.jpeg';
import tabsImg from './imgs/tabs-img.jpeg';

import "./Testimonials.css";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Testimonials = () => {
  return (
    <div
      style={{
        background: "rgb(115,7,66)",
        // background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898", 
        background: "black",
        color: "#ffffff",
        padding: "50px 20px",
        textAlign: "center",
        height: "100vh",
        border: "10px solid #fcddfc",
        
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        WHAT OUR USERS SAY
      </h2>
      <MDBContainer>
        <MDBCarousel showControls light fade>
          <MDBCarouselItem className="text-center">
            <img
              src={arijoyImg}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4 avatar-img"
              
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-2" style={{ fontWeight: "bold"  , color: "white"}}>
                  Arijoy Majumdar
                </h5>
                <p  style={{ fontStyle: "italic" , color: "gray" }}>
                  Software Engineer
                </p>
                <p style={{ lineHeight: "1.7" , color: "white" }}>
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Really grateful to BORROWER. Borrowed a pair of scissors from Raju Nepali for my grandma, now I'm at Google. Thank you Raju, and double thanks to BORROWER for being so resourceful in my desperate time of need.
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src={amanImg}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4 avatar-img"
              
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-2" style={{ fontWeight: "bold"  , color: "white"}}>
                  Aman Reza
                </h5>
                <p  style={{ fontStyle: "italic" , color: "gray"}}>
                  Web Developer
                </p>
                <p style={{ lineHeight: "1.7" , color: "white" }}>
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  When in need, BORROWER has always been my go-to for borrowing even the smallest items. I needed a Sherwani to attend the wedding of my sister-in-law, BORROWER saved me atleast 5000 bucks, i had it borrowed from someone who lived near-by.
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src={ritishImg}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4 avatar-img"
              
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-2" style={{ fontWeight: "bold"  , color: "white"}}>
                  Ritish Dubey
                </h5>
                <p  style={{ fontStyle: "italic" , color: "gray"}}>
                  Full Stack MERN Developer
                </p>
                <p style={{ lineHeight: "1.7" , color: "white" }}>
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I am extremely grateful to BORROWER for connecting me with someone who generously let me borrow their Visa for Canada. Without the platform, I never would have met this amazing individual who helped make my journey possible. BORROWER truly goes above and beyond in making connections that matter. Balle!
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
          <img
            src={tabsImg}
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4 avatar-img"
            
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-2" style={{ fontWeight: "bold"  , color: "white"}}>
                Tawboshmi Shinigami
              </h5>
              <p  style={{ fontStyle: "italic" , color: "gray" }}>
                Adult Content Creator
              </p>
              <p style={{ lineHeight: "1.7" , color: "white" }}>
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Shoutout to BORROWER for connecting me with the perfect person who let me borrow their... camera equipment. Who knew that between all the, um, content creation I do, I’d find someone who truly understood my needs? BORROWER really knows how to make connections that matter, whether it’s for business or personal use. 10/10 would recommend for all your... creative ventures!😉😉
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default Testimonials;
