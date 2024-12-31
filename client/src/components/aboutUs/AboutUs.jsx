import React from "react";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "./../Header&Footer/Header";
import Footer from "../Header&Footer/Footer";
import CustomCard from "./CustomCard";
import styles from "./AboutUs.module.css";
import HomeHeader from "../home/HomeHeader.jsx";
import AboutUsCompany from "./AboutUsCompany";
import peopleData from "./people";
import { Navigate, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const isAuthenticated = () => localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const NavigateToHome = () => {navigate('/#features');}
  return (
    <>
      {isAuthenticated() ? <HomeHeader /> : <Header />}

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Find The Best Deals With BORROWER
          </h1>
          <p className={styles.heroSubtitle}>
          Connecting neighbors, unlocking opportunities, and empowering you to buy, sell, lend, or borrow with ease—right where you live.
          </p>
          <Button variant="primary" className={styles.ctaButton} onClick={NavigateToHome}>
          Visit Now <span className="fat-arrow">&#10132;</span>
          </Button>
        </div>
      </div>

      <div className={styles.aboutUsBodyRevamped}>
      <div className={styles.aboutUsContentWrapper}>
        <div className={styles.aboutUsTextContainer}>
          <h2 className={styles.aboutUsTitle}>Who We Are</h2>
          <p className={styles.aboutUsDescription}>
            At <span className={styles.highlight}>Borrower</span>, we redefine how communities interact by creating a seamless platform for buying, selling, and renting items. Our mission is to empower users with trust and freedom, bridging the gap between need and availability.
          </p>
          <p className={styles.aboutUsDescription}>
            Whether you’re looking to monetize your possessions or find something you need, Borrower is your trusted marketplace, offering convenience, transparency, and fair access to resources.
          </p>
          <Button variant="outline-light" className={styles.learnMoreButton} onClick={NavigateToHome}>
            Learn More
          </Button>
        </div>
        <div className={styles.aboutUsImageWrapper}>
      <div className={styles.monitizeTextContainer}>
        <span className={styles.monetizeYourBelongings}>"MONETIZE YOUR BELONGINGS"</span>
        <span className={styles.solutionGuide}>&mdash; BORROWER</span>
      </div>
    </div>
      </div>
      <div className={styles.aboutUsCompanyContainer}>
      <AboutUsCompany />
    </div>
    </div>

    
      <div className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Meet Our Team</h2>
        <CardGroup className={styles.teamGrid}>
          {peopleData.map((person, index) => (
            <CustomCard key={index} {...person} />
          ))}
        </CardGroup>
      </div>

      <Footer />
    </>
  );
}
