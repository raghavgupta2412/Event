import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "../assets/google.png";
import { Context } from "../contexts/Context";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Login() {
  let email = useRef();
  let password = useRef();

  let navigate = useNavigate();
  // const { setCurrUser } = useContext(Context);
  const { setToken, setUser, currUser } = useAuth();

  async function handleSubmit() {
    try {
      let res = await axios.post(import.meta.env.VITE_BACKEND + `/login`, {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(res);

      setUser(res.data.data.userdata);
      setToken(res.data.data.token);
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
        <p>Login</p>
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
        <div className="link-div">
          Forgot Password?{" "}
          <Link className="pass-change" to="/error">
            Recover Password
          </Link>
        </div>
        <button className="btn" onClick={handleSubmit}>
          SIGN IN
        </button>

        {/* <div className="or-separator"> OR </div> */}
        {/* <div className="signin-options">
          <p>Sign in with your</p>
          <div className="icon-container">
            <img src={Google} alt="" />
            <img src={Google} alt="" />
            <img src={Google} alt="" />
          </div>
        </div> */}
        <div className="link-div">
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
