import React, { useState } from 'react';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search input

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h6>CAREHUB</h6>
        <p>... health at your fingertips.</p>
      </div>
      
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pages">Download App</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#blog">Book Appointment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-right">
        <div className="search-icon" onClick={toggleSearch}>
          {searchOpen ? <FaTimes /> : <FaSearch />} {/* Toggle search and close icon */}
        </div>
        {searchOpen && (
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
        )}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <RxHamburgerMenu />} {/* Toggle menu and close icon */}
        </div>
        <div className="contact-info">
          <span>Call Anytime</span>
          <a href="tel:+66925682596">669 2568 2596</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
