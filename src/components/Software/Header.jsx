import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav';
function Header() {
  return (
    <div>
      <Nav />
      <div className='software'>
          <div className="about-software">
              <div className="text">
                  <h1>Discover Our Services</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed provident nam eaque, repellendus fugit ad exercitationem maiores, dolores eum quidem vero in nostrum sit alias ut unde voluptate ducimus?</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header;