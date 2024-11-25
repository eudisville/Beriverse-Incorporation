import React from 'react'
import Nav from '../components/Nav/Nav'
import './styles/big.css'

function Big() {
  return (
    <div>
      <Nav />
      <div className='big'>
        <div className="about-big">
            <div className="text">
                <h1>Big Data & AI</h1>
                <p>We develop custom software solutions designed to solve complex business challenges and improve operational efficiency. From innovative applications to streamlined systems, we create technology that empowers organizations and individuals to achieve their goals.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Big