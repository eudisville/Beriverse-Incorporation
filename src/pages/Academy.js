import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import './styles/academy.css'

function Big() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <div className='big'>
        <div className="about-big">
            <div className="text" data-aos="fade-up">
                <h1>Welcome at Beriverse Academy</h1>
                <p>Beriverse Academy mission is help most people to improve their skills in technology and high value on the market</p>
                <Link to='https://beriverse-academy.vercel.app/'><button>Visit BA</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Big