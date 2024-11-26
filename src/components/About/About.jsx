import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './About.css'

function About() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className='about'>
        <div className="about-main">
            <div className="about-text" data-aos= "fade-right">
                <h1>About Us</h1>
                <p>Beriverse Incorporation is a technological company which grow
                  in Software Development, Artificial Intelligence and Games. 
                  Our mission is Inspire and Transform the World. This mission means
                  we are open to enhance human and the world capacity through innovative technologie.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About