import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">

      <div className="logo-container">
        <img src="devlogo.png" alt="Logo" className="logo" />
        {/* <span className="logo-text">DevLogo</span> */}
      </div>

      <div className={`tabs ${menuOpen ? 'show' : ''}`}>
        <div> <Link onClick={toggleMenu} to="/" className="tab">Home</Link></div>
        <div> <Link onClick={toggleMenu} to="/event" className="tab">Events</Link></div>
        <div> <Link onClick={toggleMenu} to="/project" className="tab">Project</Link></div>
        <div> <Link onClick={toggleMenu} to="/leader" className="tab">LeaderBoard</Link></div>
        <div> <Link onClick={toggleMenu} to="/about" className="tab">About Us</Link></div>
        <div>  <Link onClick={toggleMenu} to="/team" className="tab">Team</Link></div>
        <div> <Link onClick={toggleMenu} to="/login" className="tab">Login</Link></div>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
};
