import React from 'react'
import {Link} from 'react-router-dom'
import "./AddTournament.css"

function AddTournament() {
  return (
    <div className='login-page'>
      <a href="/" className='back-to-home'>&lt;&nbsp; Back to GamePlay</a>
      <div className='login-container'>
        <h3>Welcome Organizer</h3>
        <p>Add a Event</p>
        <div className='input-field'>
          <label htmlFor="name">Event Name</label>
          <input type="text" id="name" placeholder='Enter Event Name' />
        </div>
        <div className='input-field'>
          <label htmlFor="time">Time of Event</label>
          <input type="datetime-local" id="time" />
        </div>
        <div className='money'>
          <div className='input-field'>
            <label htmlFor="fee">Entry Fee</label>
            <input type="number" min={0} id="fee" placeholder='Enter Entry Fees' />
          </div>
          <div className='input-field'>
            <label htmlFor="prize">Prize Money</label>
            <input type="text" id="prize" placeholder='Enter Prize Money' />
          </div>
        </div>
        <div className='input-field'>
          <label htmlFor="max-team">Max Teams Allowed</label>
          <input type="number" min={2} id="max-team" placeholder='Enter No. of Teams' />
        </div>
        
        <button className='btn'>Add Event</button>
        
        </div>
    </div>
  )
}

export default AddTournament