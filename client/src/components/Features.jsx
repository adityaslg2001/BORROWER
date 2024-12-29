import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import './Header&Footer/Header.css';
import { LinearGradient } from 'react-text-gradients'

function Features() {
    return (
        <div>
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
          <br></br>
          <div>
            <button className="btn btn-primary btn-lg me-3">Get Started</button>
            <button className="btn btn-outline-light btn-lg white-1">Learn More</button>
          </div>
        </div>
      </header>


      <section id="features" className="py-5">
        <div className="container text-center">
          <h2>FEATURES</h2>
          <p className="text-muted mb-5">
            Explore the amazing features that make Lend It Out the best platform for lending and borrowing.
          </p>
          <div className="row">
            <div className="col-md-4">
              <h5>Easy Lending</h5>
              <p>List items for lending with just a few clicks.</p>
            </div>
            <div className="col-md-4">
              <h5>Secure Transactions</h5>
              <p>Safe and reliable payment options.</p>
            </div>
            <div className="col-md-4">
              <h5>Wide Reach</h5>
              <p>Connect with borrowers and lenders from everywhere.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
    };

export default Features;