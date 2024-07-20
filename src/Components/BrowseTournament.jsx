import React, { useEffect, useState } from "react";
import Game1 from "../assets/game1.jpg";
import Game2 from "../assets/game2.png";
import Game3 from "../assets/game3.jpg";
import Game4 from "../assets/game4.jpg";
import Coins from "../assets/coins.png";
import "./BrowseTournament.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function BrowseTournament() {
  const [show, setShow] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await axios.get(import.meta.env.VITE_BACKEND + `/show`);
      console.log(response);
      setShow(response.data.events);
    }
    getData();
  }, []);

  return (
    <div className="browse-page" id="rag">
      <h3>BROWSE TOURNAMENTS</h3>
      <p>
        Find the perfect Tournament for you. Head to head match where you pick
        the game, rules and prizes.
      </p>
      <div className="add-tour">
        <a href="/addtournament" className="add-btn">
          Add +
        </a>
      </div>
      {show.map((item, i) => (
        <Card item={item} key={i} show={show} setShow={setShow} />
      ))}
      {/* <div className='tournament-card'>
            <img src={Game2} alt="" />
            <div className='card-details'>
                <h4>MARATHON AIM PREMIUM</h4>
                <div className='tags'>
                    <p>Starts in <span>10D 12H 3M</span></p><p>June 19, 05:00 AM</p>
                </div>
                <hr className='break-line' />
                <div className='match-details'>
                    <div><span>Entry/Player</span><p>10 Credits</p></div>
                    <div><span>Team Size</span><p>2 vs 2</p></div>
                    <div><span>Max Teams</span><p>64</p></div>
                    <div><span>Enrolled</span><p>11</p></div>
                </div>
            </div>
            <div className='card-price'>
                <span className='price-tag'><img src={Coins} alt="" />PRICE</span>
                <h4>$800</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
          </div>
        </div>
        <div className="card-price">
          <span className="price-tag">
            <img src={Coins} alt="" />
            PRICE
          </span>
          <h4>$800</h4>
          <a href="/showtournament">View Tournament</a>
          <p>Top 3 players win a Cash Prize.</p>
        </div>
      </div>
      <div className="tournament-card">
        <img src={Game3} alt="" />
        <div className="card-details">
          <h4>MIX IT MONDAYS - CARRY ONLY</h4>
          <div className="tags">
            <p>
              Starts in <span>10D 12H 3M</span>
            </p>
            <p>June 19, 05:00 AM</p>
          </div>
          <hr className="break-line" />
          <div className="match-details">
            <div>
              <span>Entry/Player</span>
              <p>10 Credits</p>
            </div>
            <div>
              <span>Team Size</span>
              <p>2 vs 2</p>
            </div>
            <div>
              <span>Max Teams</span>
              <p>64</p>
            </div>
            <div className='card-price'>
                <span className='price-tag'><img src={Coins} alt="" />PRICE</span>
                <h4>$1000</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
          </div>
        </div>
        <div className="card-price">
          <span className="price-tag">
            <img src={Coins} alt="" />
            PRICE
          </span>
          <h4>$1000</h4>
          <a href="/showtournament">View Tournament</a>
          <p>Top 3 players win a Cash Prize.</p>
        </div>
      </div>
      <div className="tournament-card">
        <img src={Game4} alt="" />
        <div className="card-details">
          <h4>MARATHON AIM PREMIUM</h4>
          <div className="tags">
            <p>
              Starts in <span>10D 12H 3M</span>
            </p>
            <p>June 19, 05:00 AM</p>
          </div>
          <hr className="break-line" />
          <div className="match-details">
            <div>
              <span>Entry/Player</span>
              <p>10 Credits</p>
            </div>
            <div>
              <span>Team Size</span>
              <p>2 vs 2</p>
            </div>
            <div>
              <span>Max Teams</span>
              <p>64</p>
            </div>
            <div>
              <span>Enrolled</span>
              <p>11</p>
            </div>
            <div className='card-price'>
                <span className='price-tag'><img src={Coins} alt="" />PRICE</span>
                <h4>$400</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
        </div> */}
    </div>
  );
}

function Card({ item, show, setShow }) {
  console.log(item);
  const { setToken, currUser } = useAuth();
  let naviagte = useNavigate();
  async function handleDelete() {
    let response = await axios.delete(
      import.meta.env.VITE_BACKEND + `/delete/${item._id}`
    );
    naviagte("/#rag");
    // let arr = show.filter((item, index) => {
    //   if (item._id !== _id) {
    //     return item;
    //   }
    // });
    // console.log(arr);
    // setShow(arr);
  }

  return (
    <div>
      <div className="tournament-card">
        <img src={Game1} alt="" />
        <div className="card-details">
          <h4>
            {/* MIX IT MONDAYS - CARRY ONLY */}
            {item.name}
          </h4>
          <div className="tags">
            <p>
              Starts in <span>10D 12H 3M</span>
            </p>{" "}
            <p>{new Date(item.time).toDateString()}</p>
          </div>
          <hr className="break-line" />
          <div className="match-details">
            <div>
              <span>Entry/Player</span>
              <p>{item.entryfee} $</p>
            </div>
            {/* <div>
              <span>Team Size</span>
              <p>2 vs 2</p>
            </div> */}
            <div>
              <span>Max Teams</span>
              <p>{item.maxEnrollment}</p>
            </div>
            <div>
              <span>Enrolled</span>
              <p>{item.enrolled}</p>
            </div>
          </div>
          {currUser ? (
            <div className="edit-tournament">
              <a href={`/edit/${item._id}`}>Edit</a>
              <a href="" onClick={handleDelete}>
                Delete
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="card-price">
          <span className="price-tag">
            <img src={Coins} alt="" />
            PRICE
          </span>
          <h4>{item.prize} $</h4>
          <a href="/showtournament">View Tournament</a>
          <p>Top 3 players win a Cash Prize.</p>
        </div>
      </div>
    </div>
  );
}

export default BrowseTournament;
