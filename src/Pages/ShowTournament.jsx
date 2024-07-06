import React from 'react'
import Navbar from '../Components/Navbar'
import './ShowTournament.css'
import Coins from '../assets/coins.png'
import Footer from '../Components/Footer'

function ShowTournament() {
  return (
    <div className='show-page'>
        <div className='show-container1'>
            <Navbar />
            <div className="head-cont">
                <h4>Tournaments</h4>
                <p>Home &#x2192; Tournaments</p>
            </div>
        </div>
        <div className='show-container2'>
            <div className='show-div'>
                <div className='part-1'>
                    <h3>MARATHON AIM PREMIUM</h3>
                    <div className='tags'>
                        <p>Starts in <span>10D 12H 3M</span></p>
                        <p>June 19, 05:00 AM</p>
                    </div>
                </div>
                <div className='part-2'>
                    <h4>$800</h4>
                    <a href="/showtournament">Join Now!!</a>
                </div>
            </div>
        </div>
        <div className='show-container3'>
            <h3>INFORMATION</h3>
            <div>
                <h4>FORMAT</h4>
                <p> &gt; Map pool: Selected Aim Maps</p>
                <p> &gt; All kind of cheating will result in a permanent suspension from GamePlay.</p>
                <p> &gt; Toxic behaviour will cause warnings and in severe cases both disqualifications and suspensions</p>
            </div>
            <div>
                <h4>PRIZE CLAIM</h4>
                <p> &gt; Prize claims must be completed within 24 hours of the end of the toumament.</p>
                <p> &nbsp;&nbsp; Claims can take up to 72 hours to be processed.</p>
            </div>
            <div>
                <h4>RULES</h4>
                <p> &gt; Please be respectful to your host and other participants.</p>
                <p> &nbsp;&nbsp; If any malicious behavior is reported, you will be removed from the tournament.</p>
                <p> &gt; Please be on time for your registration and for the actual toumament.</p>
                <p> &nbsp;&nbsp; Otherwise, you (and your team) will be disqualified on no-show.</p>
                <p> &gt; You and all of your teammates must be registered to qualify for the event.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ShowTournament