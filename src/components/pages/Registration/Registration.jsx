import React, { useState, useEffect } from "react";

import "./registration.css"

import { Link } from "react-router-dom";

const Registration = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailDirty, setEmailDirty] = useState(false); 
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('incorrectly');
  const [passwordError, setPasswordError] = useState('incorrectly');

  const [formValid, setFormValid] = useState(false);

  // если все хуки тру то форма валидна и отправляется для этого проверка введены ли корректно емаил пароль
  useEffect(() => {
    if ([emailError, passwordError].includes('incorrectly')) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]); // активация кнопки для отправки формы disabli

  const emailHandler = (event) => {
    setEmail(event.target.value);
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(event.target.value).toLocaleLowerCase())) {
      setEmailError("incorrectly");
      setFormValid(false);
    } else {
      setFormValid(true);
      setEmailError("");
    }
  };

  const passwordHandler = ({ value }) => {
    console.log('value :>> ', value);

    setPassword(value);
    if (value.length < 3 || value.length > 8) {
      setPasswordError("пароль должен быть больше 3х и меньше 8 символов");
      setFormValid(false);
      if (!value) {
        setFormValid(false);
        setPasswordError("пароль не может быть пустым");
      }
    } else {
      setPasswordError(" ");
      setFormValid(true);
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className="app_container__rg">
      <div className="app__logo">
        <img src="Images\logo.svg" alt="Logo" />
      </div>
      <h1 className="app__title">Create your Account</h1>
      <form>
        <input
          onChange={(event) => emailHandler(event)}
          onBlur={(event) => blurHandler(event)}
          name="email"
          type="text"
          placeholder="email"
        />
        {emailDirty && emailError && (<div style={{ color: "red", fontSize:"12px",padding:"0",marginTop:"-15px" }}>{emailError}</div>)}
        <br />
        <input
          onChange={({ target }) => passwordHandler(target)} //при вводе
          onBlur={(event) => blurHandler(event)} //при наводе
          name="password"
          type="password"
          placeholder="password"
        />
        {passwordDirty && passwordError && (<div style={{ color: "red", fontSize:"12px",padding:"0",marginTop:"-15px" }}>{passwordError}</div>)}
        <br />
        <button className="button" disabled={!formValid} type="submit">Continue</button>
      </form>
      <div className="subtitle">
        Already have an account? <Link className="subtitle__link" to="/"> Login</Link>
      </div>
    </div>
  );
};

export { Registration };