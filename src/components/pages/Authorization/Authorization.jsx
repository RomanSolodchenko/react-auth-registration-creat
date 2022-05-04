import React from "react";

import { Link } from "react-router-dom";

import "./auth.css";

const Authorization = () => {
  return (
    <div className="app__container">
      <div className="app__logo">
        <img src="Images\logo.svg" alt="Logo" />
      </div>
      <h1 className="app__title">Auth0</h1>
      <div className="app__decription">
        Log in to Auth0 to continue to Auth0
        Dashboard.
      </div>
      <form action="">
        <input type="email" name="email" placeholder="Email Address" />
      </form>

      <button className="button">Continue</button>

      <div className="subtitle">
        Don't have an account?
        <Link className="subtitle__link" to="/2"> Signup</Link>
      </div>

      <h3 class="heading">
        <span className="heading__text">OR</span>
      </h3>

      <div className="socials">
        <div className="socials__item">
          <div className="social__icon">
            <img src="Images/Loginlinkedin.png" alt="" />
          </div>
          <div className="social__text">Continue with Linkedin</div>
        </div>

        <div className="socials__item">
          <div className="social__icon">
            <img src="Images/LoginMicrosoft.png" alt="" />
          </div>
          <div className="social__text">Continue with Microsoft</div>
        </div>
        <div className="socials__item">
          <div className="social__icon">
            <img src="Images/LoginGithub.png" alt="" />
          </div>
          <div className="social__text">Continue with Github</div>
        </div>
        <div className="socials__item">
          <div className="social__icon">
            <img src="Images/LoginGoogle.png" alt="" />
          </div>
          <div className="social__text">Continue with Google</div>
        </div>
      </div>
    </div>
  );
};

export { Authorization };
