import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Social Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <LogIn />
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
           
          <span style={{ fontsize: "12px" }}>
            Don't have an account. Signup!
          </span>
          
        <button className="button infoButton" type="submit">
          Login
        </button>
        </div>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="fistname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
        <div>
          <span style={{ fontsize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
