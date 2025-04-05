import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Cursor from '../components/Cursor/Cursor';
import './styles/game.css'
import AOS from 'aos';

function Game() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [cursorVariant, setCursorVariant] = useState('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

  return (
    <div>
        <Nav />
        <Cursor cursorVariant={cursorVariant} />
        <div className='game'>
          <div className="about-game">
              <div className="text" data-aos="fade-up">
                  <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Beriverse Technologies</h1>
                  <p>At Beriverse, we combine innovation and passion to create groundbreaking solutions that enhance the world and empower individuals. Through our cutting-edge platform and groundbreaking research, we’re shaping the future of technology.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game