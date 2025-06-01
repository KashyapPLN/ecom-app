import React, { useState } from 'react';
import './Navbar.css';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { PiOrange } from 'react-icons/pi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className='navbar'>
        {/* Hamburger only on mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FiMenu />
        </div>

        {/* Left nav items - hidden on mobile */}
        <div className='navbar-left'>
          <a href="#shop" className='nav-item'>Shop</a>
          <a href="#location" className='nav-item'>Location</a>
          <a href="#company" className='nav-item'>Company</a>
        </div>

        {/* Center logo */}
        <div className='navbar-center'>
          <div className='logo'>
            <h1>Sip<PiOrange />rch</h1>
          </div>
        </div>

        {/* Icons on right */}
        <div className='navbar-right'>
          <FiSearch className='nav-icon' />
          <FiUser className='nav-icon' />
          <FiShoppingCart className='nav-icon' />
        </div>
      </div>

      {/* Offcanvas menu for mobile */}
      <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <FiX className="close-icon" onClick={toggleMenu} />
        </div>
        <a href="#shop" className='offcanvas-item' onClick={toggleMenu}>Shop</a>
        <a href="#location" className='offcanvas-item' onClick={toggleMenu}>Location</a>
        <a href="#company" className='offcanvas-item' onClick={toggleMenu}>Company</a>
      </div>

      {/* Background overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
