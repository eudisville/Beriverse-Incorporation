import React from 'react'
import Nav from '../components/Nav/Nav'
import './styles/game.css'

function Game() {
  return (
    <div>
        <Nav />
        <div className='game'>
          <div className="about-game">
              <div className="text">
                  <h1>Beriverse Games</h1>
                  <p>At Beriverse, we combine innovation and passion to create groundbreaking solutions that enhance the world and empower individuals. Through our cutting-edge platform and groundbreaking research, we’re shaping the future of technology.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game