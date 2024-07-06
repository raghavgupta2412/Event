import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import Google from '../assets/google.png'

function Login() {
  return (
    <div className='login-page'>
      <a href="/" className='back-to-home'>&lt;&nbsp; Back to GamePlay</a>
      <div className='login-container'>
        <h3>Welcome to GamePlay</h3>
        <p>Login</p>
        <div className='input-field'>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder='Enter Your Email' />
        </div>
        <div className='input-field'>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder='Enter your Password' />
        </div>
        <div className='link-div'>Forgot Password? <Link className='pass-change' to="/error">Recover Password</Link></div>
        <button className='btn'>SIGN IN</button>
        
        <div className='or-separator'> OR </div>
        <div className='signin-options'>
          <p>Sign in with your</p>
          <div className='icon-container'>
            <img src={Google} alt="" />
            <img src={Google} alt="" />
            <img src={Google} alt="" />
          </div>
        </div>
        <div className='link-div'>Don't have an account? <Link className='link' to="/register">Sign Up Here</Link></div>
      </div>
    </div>
  )
}

export default Login