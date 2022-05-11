import React, {useState} from "react";

import { Link } from "react-router-dom";

import "./auth.css";

import LoginForm from "./LoginForm";


const Authorization = () => {

  const adminUser = {
    email: "admin@mail.ru",
    password: "1234"
  } // save user

  const [user, setUser] = useState({name:"", password:""});
  const [error, setError] = useState("");
  

  const Logout = () =>{
    console.log("exit");
    setUser({ email:""});
  }

  const Login = details =>{
    console.log(details);
  
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("true");
      setUser({
        name: details.name, // если введеные данные правильно то при переходе страницы возьмется имя из инпута и передасться в новую страницу в Н1
        email:details.email
      });
    } else {
     console.log("ERROR*");
     setError("Mistake! wrong username or password");
    }
  }

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


      {(user.name != "") ? (<div>******<button onClick={Logout}>exit</button></div>) : (<LoginForm Login={Login} error={<div style={{ color: "red", fontSize:"14px"}}>{error}</div>} />)}

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
