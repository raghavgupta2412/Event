import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "../assets/google.png";
import { Context } from "../contexts/Context";
import axios from "axios";

function Register() {
  let name = useRef();
  let email = useRef();
  let password = useRef();

  let navigate = useNavigate();

  async function handleSubmit() {
    try {
      let response = await axios.post(
        import.meta.env.VITE_BACKEND + `/register`,
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        }
      );
      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-page">
      <a href="/" className="back-to-home">
        &lt;&nbsp; Back to GamePlay
      </a>
      <div className="login-container">
        <h3>Welcome to GamePlay</h3>
        <p>Register</p>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username"
            ref={name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            ref={email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter your Password"
            ref={password}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Signup for Free
        </button>

        {/* <div className="or-separator"> OR </div>
        <div className="signin-options">
          <p>Sign up with your</p>
          <div className="icon-container">
            <img src={Google} alt="" />
            <img src={Google} alt="" />
            <img src={Google} alt="" />
          </div>
        </div> */}
        <div className="link-div">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
