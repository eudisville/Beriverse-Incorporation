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
                Beriverse is a multidisciplinary tech company with a mission
                to empower individuals and businesses to expand their 
                capabilities through technology. Through technology development,
                education, and creativity, we are building an ecosystem 
                that connects talent, ideas, and tools to drive real impact.
                </p>
            </div>
            <div className="about-image">

            </div>
        </div>
    </div>
  )
}

export default About