import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Cursor from '../components/Cursor/Cursor';
import './styles/game.css'

function Game() {
  const [cursorVariant, setCursorVariant] = useState('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

  return (
    <div>
        <Nav />
        <Cursor cursorVariant={cursorVariant} />
        <div className='game'>
          <div className="about-game">
              <div className="text">
                  <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Consumer Technologies</h1>
                  <p>At Beriverse, we combine innovation and passion to create groundbreaking solutions that enhance the world and empower individuals. Through our cutting-edge platform and groundbreaking research, we’re shaping the future of technology.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game