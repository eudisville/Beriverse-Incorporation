import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './About.css'
import Cursor from '../Cursor/Cursor';

function About() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const [cursorVariant, setCursorVariant] = useState('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

  return (
    <div className='about'>
      {/* Passez cursorVariant au composant Cursor */}
      <Cursor cursorVariant={cursorVariant} />
        <div className="about-main">
            <div className="about-text" data-aos= "fade-right">
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>About Us</h1>
                <p>
                  Beriverse Incorporation is a company which grow
                  in Technology, Education, Audiovisual & Entertainement. 
                  Our mission is Inspire and Transform the World. This mission 
                  delivering great experiences to as many people as possible, 
                  by combining technology, creativity, and education to make a 
                  lasting impact on lives.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About