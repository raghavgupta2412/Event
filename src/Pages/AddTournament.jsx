import React, { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./AddTournament.css";
import axios from "axios";

function AddTournament() {
  let name = useRef();
  let prize = useRef();
  let maxEnrollment = useRef();
  let entryfee = useRef();
  let time = useRef();
  let navigate = useNavigate();

  async function handleSubmit() {
    try {
      let response = await axios.post(
        import.meta.env.VITE_BACKEND + `/addEvent`,
        {
          name: name.current.value,
          time: time.current.value,
          prize: prize.current.value,
          maxEnrollment: maxEnrollment.current.value,
          entryfee: entryfee.current.value,
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
        <h3>Welcome Organizer</h3>
        <p>Add a Event</p>
        <div className="input-field">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Event Name"
            ref={name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="time">Time of Event</label>
          <input type="datetime-local" id="time" ref={time} />
        </div>
        <div className="money">
          <div className="input-field">
            <label htmlFor="fee">Entry Fee</label>
            <input
              type="number"
              min={0}
              id="fee"
              placeholder="Enter Entry Fees"
              ref={entryfee}
            />
          </div>
          <div className="input-field">
            <label htmlFor="prize">Prize Money</label>
            <input
              type="text"
              id="prize"
              placeholder="Enter Prize Money"
              ref={prize}
            />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="max-team">Max Teams Allowed</label>
          <input
            type="number"
            min={2}
            id="max-team"
            placeholder="Enter No. of Teams"
            ref={maxEnrollment}
          />
        </div>

        <button className="btn" onClick={handleSubmit}>
          Add Event
        </button>
      </div>
    </div>
  );
}

export default AddTournament;
