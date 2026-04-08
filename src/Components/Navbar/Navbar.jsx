import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../../../public/assets/cart-icon.png'
import logo from '../../../public/assets/logo.png'
import search_icon from '../../../public/assets/search-icon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src={logo} alt="Pawlabbi" />
      </a>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/pawbottle" onClick={() => setMenuOpen(false)}>Pawbottle</a></li>
        <li><a href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
      </ul>

      <div className="navbar__right">
        <button className="navbar__icon-btn" aria-label="Cart">
          <img src={cart_icon} alt="Cart" />
        </button>
        <button className="navbar__icon-btn" aria-label="Search">
          <img src={search_icon} alt="Search" />
        </button>
        <a href="/auth" className="navbar__auth">Anmelden/Registrieren</a>
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar