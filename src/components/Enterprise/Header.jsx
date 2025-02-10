import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Nav from '../Nav/Nav';
import AOS from 'aos';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <Nav />
      <div className='software'>
          <div className="about-software">
              <div className="software-text" data-aos="fade-up">
                  <h1>Our solutions for Enterprises</h1>
                  <p>We develop custom software solutions designed to solve complex business challenges and improve operational efficiency. 
                  From innovative applications to streamlined systems, we create technology that empowers organizations to achieve their goals.</p>
                  <Link to="/business"><button>View more</button></Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header;