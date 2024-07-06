import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import Landing from '../Components/Landing'
import GameShow from '../Components/GameShow'
import BrowseTournament from '../Components/BrowseTournament'
import Numup from '../Components/Numup'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <GameShow />
      <BrowseTournament />
      <Numup />
    </div>
  )
}

export default Home