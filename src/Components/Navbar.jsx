import React, { useState } from 'react'
import logo from "../assets/gamelogo1.png"
import './Navbar.css'

function Navbar() {

  // let navbar = document.getElementsByClassName('navbar')
  // window.onscroll = function() {
  //   if (document.body.scrollTop > 0) {
  //     console.log("first")
  //     navbar.classList.add('scrolled')
  //   } else {
  //     navbar.classList.remove('scrolled')
  //   }
  // }
  return (
    <div className='navbar'>
        <div className='logo'><img src={logo} alt="" />GamePlay</div>
        <div className='nav-links'>
            <a href="#">Home</a>
            <a href="#">Tournaments</a>
            <a href="#">About US</a>
            <a href="#">Contact US</a>
        </div>
        <div className='nav-btn'>
            <a href="/login">LOG IN</a>
        </div>
    </div>
  )
}

export default Navbar