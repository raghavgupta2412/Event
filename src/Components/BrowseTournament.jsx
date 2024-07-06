import React from 'react'
import Game1 from '../assets/game1.jpg'
import Game2 from '../assets/game2.png'
import Game3 from '../assets/game3.jpg'
import Game4 from '../assets/game4.jpg'
import Coins from '../assets/coins.png'
import './BrowseTournament.css'

function BrowseTournament() {
  return (
    <div className='browse-page'>
        <h3>BROWSE TOURNAMENTS</h3>
        <p>Find the perfect Tournament for you. Head to head match where you pick the game, rules and prizes.</p>
        <div className="filter-div">
            <div className='filters'>
                <label htmlFor="status">Status</label>
                <input type="text" id="status" placeholder='Status' />
            </div>
            <div className='filters'>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" placeholder='Search' />
            </div>
            <div className='filters'>
                <label htmlFor="size">Team Size</label>
                <input type="text" id="size" placeholder='Team Size' />
            </div>
            <div className='filters'>
                <label htmlFor="fees">Entry Fees</label>
                <input type="text" id="fees" placeholder='Entry Fee' />
            </div>
        </div>
        <div className='tournament-card'>
            <img src={Game1} alt="" />
            <div className='card-details'>
                <h4>MIX IT MONDAYS - CARRY ONLY</h4>
                <div className='tags'>
                    <p>Starts in <span>10D 12H 3M</span></p> <p>June 19, 05:00 AM</p>
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
                <h4>$600</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
        </div>
        <div className='tournament-card'>
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
        <div className='tournament-card'>
            <img src={Game3} alt="" />
            <div className='card-details'>
                <h4>MIX IT MONDAYS - CARRY ONLY</h4>
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
                <h4>$1000</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
        </div>
        <div className='tournament-card'>
            <img src={Game4} alt="" />
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
                <h4>$400</h4>
                <a href="">View Tournament</a>
                <p>Top 3 players win a Cash Prize.</p>
            </div>
        </div>
    </div>
  )
}

export default BrowseTournament