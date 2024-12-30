import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandshake,
  faMapMarkerAlt,
  faBoxOpen,
  faPiggyBank,
  faGlobe,
  faComments, // Real-time chat icon
  faClock, // Lending/borrowing expiration icon
  faStar // Rating & review icon
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from 'react-text-gradients'

export default function Features() {
  const features = [
    {
      icon: faUsers,
      title: "Community Marketplace",
      description: "Connect with people nearby for buying, selling, lending, and borrowing items.",
    },
    {
      icon: faHandshake,
      title: "Secure Transactions",
      description: "Trade confidently with our secure payment and trade facilitation systems.",
    },
    {
      icon: faMapMarkerAlt,
      title: "Localized Trades",
      description: "Find people in your area to trade items quickly and conveniently.",
    },
    {
      icon: faBoxOpen,
      title: "Diverse Listings",
      description: "Explore a wide range of items, from gadgets to household goods, all in one place.",
    },
    {
      icon: faPiggyBank,
      title: "Save and Earn",
      description: "Save money by borrowing or earn by lending items you no longer use.",
    },
    
    {
      icon: faComments,
      title: "Real-Time Chat",
      description: "Communicate instantly with buyers and sellers to negotiate, ask questions, and finalize deals.",
    },
    {
      icon: faClock,
      title: "Expiration Tracking",
      description: "Keep track of lending and borrowing expiration dates to ensure timely returns and avoid disputes.",
    },
    {
      icon: faStar,
      title: "Item Rating & Review",
      description: "Rate and review items and transactions to help the community make informed decisions.",
    }
  ];

  return (
    <div className="features-container ">
      <header className="py-5 text-center center-1">
        <div className="container">
          <h1 className="display-8 make-big">
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
              BORROWER
            </LinearGradient>
          </h1>
          <p className="lead">
            Borrow and lend items easily with neighbors nearby, all through our simple, user-friendly platform.
          </p>
          <br />
          <div>
            <button className="btn btn-primary btn-lg me-3">Get Started</button>
            <button className="btn btn-outline-light btn-lg white-1">Learn More</button>
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
