import React from 'react';
// Import links {About, Projects, Resume, Contact}
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }
    return (
      <div className="navbar" id="navbar">
        <div className="links">
            <NavLink style={navLinkStyles} to="/">About</NavLink>
            <NavLink style={navLinkStyles}to="/projects">Projects</NavLink>
            <NavLink style={navLinkStyles}to="/resume">Resume</NavLink>
            <NavLink style={navLinkStyles}to="/contact">Contact</NavLink>
        </div>
      </div>    
    );
}

export default Navbar;
