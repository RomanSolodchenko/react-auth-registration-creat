import React from "react";
import "./stylestart.css";

const Authorization = () => {
  return (
    <div className="app__container">
      <div className="app__logo">
        <img src="Images\logo.svg" alt="Logo" />
      </div>
      <div className="app__title">Auth0</div>
      <div className="app__decription">
        Log in to Auth0 to continue to Auth0 Dashboard.
      </div>
      <form action="">
        <input type="email" name="email" placeholder="Email Address" />
      </form>
      <button className="button"></button>
      <div className="subtitle">
        Don't have an account? <a href="##">Signup</a>
      </div>

      <div className="line">OR</div>

      <div className="socials">
        <div className="socials__item">
          <div className="social__icon">
            <img src="Images/Loginlinkedin.png" alt="" />
          </div>
          <div className="social__text">Continue with Linkedin</div>
        </div>
        <div className="socials__item"></div>
        <div className="socials__item"></div>
        <div className="socials__item"></div>
      </div>
    </div>
  );
};

export default Authorization;
