import React from 'react'
import Nav from '../components/Nav/Nav'
import './styles/academy.css'

function Big() {
  return (
    <div>
      <Nav />
      <div className='big'>
        <div className="about-big">
            <div className="text">
                <h1>Welcome at Beriverse Academy</h1>
                <p>Beriverse Academy mission is help most people to improve their skills in technology and high value on the market</p>
                <button>Visit BA</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Big