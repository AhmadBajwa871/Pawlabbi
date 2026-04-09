import React, { useState } from 'react';
import './Navbar.css';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const cart_icon = '/assets/cart-icon.png';
const logo = '/assets/logo.png';
const search_icon = '/assets/search-icon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src={logo} alt="Pawlabbi" />
      </a>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/pawbottle">Pawbottle</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>

      <div className="navbar__right">
        <button className="navbar__icon-btn" onClick={() => navigate('/cart')}>
          <img src={cart_icon} alt="Cart" />
          {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
        </button>

        <button className="navbar__icon-btn">
          <img src={search_icon} alt="Search" />
        </button>

        <a href="/auth" className="navbar__auth">Anmelden/Registrieren</a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;