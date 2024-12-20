import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span style={{ color: '#8b44d9' }}>Stud</span>
          <span style={{ color: 'orange' }}>ique</span>
        </h1>
      </div>
      <nav className="header-center">
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="btn btn-login">Log In</button>
        <button className="btn btn-signup">Create Account</button>
      </div>
    </header>
  );
}

export default Header;
