import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavAlpha.css';

function NavAlpha() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="logo-bw">
        <Link to="/"><img src="bw.png" alt="Logo" /></Link>
      </div>
      {/* Icône du menu hamburger */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>
      {/* Liens de navigation */}
      <div className={`nav-a ${isOpen ? 'active' : ''}`}>
        <ul>
          <li className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <span className="dropdown-link" onClick={toggleDropdown}>
              Industries
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/industries/insurance">Insurance</Link></li>
                <li><Link to="/industries/consumer-goods">Health</Link></li>
                <li><Link to="/industries/education">Education</Link></li>
                <li><Link to="/industries/health">Consumer Goods</Link></li>
                <li><Link to="/industries/finance">Financial Services</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/solution">Solution</Link>
          </li>
          <li>
            <Link to="/help">Expertise</Link>
          </li>
          <li>
            <Link to="/people">Our People</Link>
          </li>
          <li>
            <Link to="/people">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavAlpha;