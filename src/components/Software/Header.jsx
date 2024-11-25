import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav';

function Header() {
  return (
    <div>
      <Nav />
      <div className='software'>
          <div className="about-software">
              <div className="software-text">
                  <h1>Software</h1>
                  <p>We develop custom software solutions designed to solve complex business challenges and improve operational efficiency. From innovative applications to streamlined systems, we create technology that empowers organizations and individuals to achieve their goals.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header;