import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars } from 'react-icons/fa';
import '../styles/Header.css'

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (

   <>
   <nav className="navbars mt-4">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo mb-4">
<span><img src="https://xteamindia.com/skin/common/img/logo.png" style={{height:'50px',marginLeft:'50px'}}/></span>
             </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Homes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/services"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/portfolio"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Portfolio
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink
              exact
              to="/career"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Career
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick} style={{ transform: 'translateY(-15px)'}}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}> <FaBars/></i>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Nav;


