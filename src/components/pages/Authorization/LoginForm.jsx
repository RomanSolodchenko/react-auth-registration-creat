import React, { useState } from "react";
import "./auth.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        {error != "" ? <div>{error}</div> : ""}

        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={(event) =>
              setDetails({ ...details, email: event.target.value })
            }
            value={details.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(event) =>
              setDetails({ ...details, password: event.target.value })
            }
            value={details.password}
          />
        </div>
        <button className="button">Continue</button>
      </div>
    </form>
  );
}

export default LoginForm;
