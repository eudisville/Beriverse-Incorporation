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
                  <h1>Discover Our Services</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed provident nam eaque, repellendus fugit ad exercitationem maiores, dolores eum quidem vero in nostrum sit alias ut unde voluptate ducimus?</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game