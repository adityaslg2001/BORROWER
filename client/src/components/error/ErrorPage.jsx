import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div className='error-page'>
      <h1>404</h1>
      <div className='cloak__wrapper'>
        <div className='cloak__container'>
          <div className='cloak'></div>
        </div>
      </div>
      <div className='info'>
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on its behalf.
        </p>
        <button onClick={redirectHome} className='home-button-redirect'>
          Home
        </button>
      </div>
    </div>
  );
}
