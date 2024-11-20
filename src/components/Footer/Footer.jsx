import React from 'react'
import { Link } from 'react-router-dom'
import Twitter from './assets/twitter.png'
import Facebook from './assets/facebook.png'
import Linkedin from './assets/linkedin.png'
import Mail from './assets/gmail.png'
import Instagram from './assets/instagram.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <h4>Beriverse &copy;2024</h4>
      </div>
      <div className="footer-right">
        <Link to="mailto:beriverse@gmail.com" target='_blank'><img src={Mail} alt="" /></Link>
        <Link><img src={Instagram} alt="" /></Link>
        <Link><img src={Twitter} alt="" /></Link>
        <Link><img src={Linkedin} alt="" /></Link>
        <Link><img src={Facebook} alt="" /></Link>
      </div>
    </div>
  )
}

export default Footer