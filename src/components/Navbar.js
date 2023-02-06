import React from 'react';
// Import links {About, Projects, Resume, Contact}
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <div className="links">
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>    
    );
}

export default Navbar;
