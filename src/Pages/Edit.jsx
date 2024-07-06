import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./AddTournament.css";
import axios from "axios";

function Edit() {
  let name = useRef();
  let prize = useRef();
  let maxEnrollment = useRef();
  let entryfee = useRef();
  let time = useRef();
  let navigate = useNavigate();

  const [show, setShow] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    async function getData() {
      let response = await axios.get(import.meta.env.VITE_BACKEND + `/show`);
      let ok = response.data.events;
      let arr = ok.filter((item, i) => {
        return item._id === id;
      });
      setShow(arr);
      //   console.log(show);
    }
    getData();
  }, []);

  async function handleSubmit() {
    try {
      let response = await axios.patch(
        import.meta.env.VITE_BACKEND + `/update/${id}`,
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
            defaultValue={show[0]?.name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="time">Time of Event</label>
          <input
            type="datetime-local"
            id="time"
            ref={time}
            defaultValue={new Date(show[0]?.time)}
          />
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
              defaultValue={show[0]?.entryfee}
            />
          </div>
          <div className="input-field">
            <label htmlFor="prize">Prize Money</label>
            <input
              type="text"
              id="prize"
              placeholder="Enter Prize Money"
              ref={prize}
              defaultValue={show[0]?.prize}
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
            defaultValue={show[0]?.maxEnrollment}
          />
        </div>

        <button className="btn" onClick={handleSubmit}>
          Edit Event
        </button>
      </div>
    </div>
  );
}

export default Edit;
