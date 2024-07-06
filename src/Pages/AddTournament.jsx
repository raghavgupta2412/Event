import React from 'react'
import {Link} from 'react-router-dom'

function AddTournament() {
  return (
    <div className='login-page'>
      <a href="/" className='back-to-home'>&lt;&nbsp; Back to GamePlay</a>
      <div className='login-container'>
        <h3>Welcome to GamePlay</h3>
        <p>Register</p>
        <div className='input-field'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder='Enter Your Username' />
        </div>
        <div className='input-field'>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder='Enter Your Email' />
        </div>
        <div className='input-field'>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder='Enter your Password' />
        </div>
        <button className='btn'>Signup for Free</button>
        
        <div className='or-separator'> OR </div>
        
        <div className='link-div'>Already have an account? <Link className='link' to="/login">Sign In Here</Link></div>
      </div>
    </div>
  )
}

export default AddTournament