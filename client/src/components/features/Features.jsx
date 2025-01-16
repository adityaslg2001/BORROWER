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
      description: "Connect with people nearby to buy, sell, lend, or borrow items.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faHandshake,
      title: "Secure Transactions",
      description: "Trade confidently with secure payments and facilitation.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faMapMarkerAlt,
      title: "Localized Trades",
      description: "Find neighbors to trade items quickly and conveniently.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faBoxOpen,
      title: "Diverse Listings",
      description: "Explore gadgets, furniture, books, and more in one place.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faPiggyBank,
      title: "Save & Earn",
      description: "Save by borrowing or earn by lending unused items.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faGlobe,
      title: "Sustainable Living",
      description: "Promote sustainability by sharing instead of buying.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faComments,
      title: "Real-Time Chat",
      description: "Negotiate, ask questions, and finalize deals instantly.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faClock,
      title: "Expiration Tracking",
      description: "Keep track of borrowing deadlines with ease.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
    {
      icon: faStar,
      title: "Rating & Review",
      description: "Rate items and users to foster trust in the community.",
      // gradient: "linear-gradient(45deg, #fbc7d4, #9796f0)",
    },
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

      <section className="features-section next-gen">
      <div className="features-title-container">
      <h2 className="features-title">Why Choose Us?</h2>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card next-level"
            key={index}
            style={{
              background: feature.gradient,
              color: "#fff",
          
              padding: "25px",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon icon={feature.icon} className="feature-icon enhanced-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
        </div>
    </section>
    </div>
  );
}
