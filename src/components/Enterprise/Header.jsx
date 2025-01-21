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
                  <h1>Our solutions for Enterprises</h1>
                  <p>We develop custom software solutions designed to solve complex business challenges and improve operational efficiency. 
                  From innovative applications to streamlined systems, we create technology that empowers organizations to achieve their goals.</p>
                  <button>View more</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header;