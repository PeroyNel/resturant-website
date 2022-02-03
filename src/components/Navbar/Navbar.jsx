import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineMenuBook } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo"/>

      </div>
      <ul className="app__navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#menu">Menu</a></li>
        <li className="p_opensans"><a href="#awards">Awards</a></li>
        <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>

      </div>
      <div className="app__navbar-smallscreen" fontSize={27} onClick={() => setToggleMenu(true)}>
        <GiHamburgerMenu color="#fff"/>
        <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
          <MdOutlineMenuBook fontSize={27} className="over__close" onClick={() => setToggleMenu(false)}/>

          <ul className="app__smallscreen-links">
            <li className="p_opensans"><a href="#home">Home</a></li>
            <li className="p_opensans"><a href="#about">About</a></li>
            <li className="p_opensans"><a href="#menu">Menu</a></li>
            <li className="p_opensans"><a href="#awards">Awards</a></li>
            <li className="p_opensans"><a href="#contact">Contact</a></li>
          </ul>

        </div>
        
      </div>
    </nav>
  )
};

export default Navbar;
