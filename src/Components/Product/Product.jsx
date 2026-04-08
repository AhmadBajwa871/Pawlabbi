import { useState } from 'react';
import './Product.css';
import cart_icon from '../../../public/assets/Product/cart.png'
const thumbnails = [
  '../../../public/assets/Product/1.png',
  '../../../public/assets/Product/2.png',
  '../../../public/assets/Product/3.png',
  '../../../public/assets/Product/4.png',
];

export default function Product() {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="product">
      <div className="product__images">
        {/* Main image */}
        <div className="product__main-image">
          <img src={thumbnails[activeThumb]} alt="Pawbottle Hauptbild" />
        </div>

        {/* Thumbnails */}
        <div className="product__thumbs">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className={`product__thumb ${index === activeThumb ? 'product__thumb--active' : ''}`}
              onClick={() => setActiveThumb(index)}
            >
              <img src={src} alt={`Produktbild ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="product__info">
        {/* Title */}
        <h2 className="product__title">
          Pawbottle Thermo Trinkflasche Für Haustiere Hunde &amp; Katzen
        </h2>

        {/* Rating */}
        <div className="product__rating">
          <span className="product__star">★</span>
          <span className="product__rating-text">4.8/5 (50 Ratings)</span>
        </div>

        {/* Price */}
        <div className="product__price">$44.50</div>

        <hr className="product__divider" />

        {/* About */}
        <div className="product__about">
          <h4 className="product__about-title">Über Das Produkt</h4>
          <ul className="product__about-list">
            <li>
              Pawbottle Thermo Trinkflasche für Haustiere Hunde &amp; Katzen mit 2 Näpfen (960
              ml + 2×100 ml) | Orange Die perfekte Flasche für unterwegs – für Tier...
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="product__actions">
            <a href="" className='cart-btn'>
                <span className="product__btn-cart-icon">
              <img src={cart_icon} alt="" />
            </span>
          <button className="product__btn-cart">
            Add to cart
          </button>
            </a>
            
          <button className="product__btn-icon" aria-label="Wunschliste">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="product__btn-icon" aria-label="Teilen">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <hr className="product__divider" />

        {/* Delivery */}
        <div className="product__delivery">
          <h4 className="product__delivery-title">Lieferung</h4>
          <p className="product__delivery-location">
            <span className="product__delivery-link">Standort auswählen</span>
            {' '}um die Versandkosten zu berechnen.
          </p>
          <p className="product__delivery-return">
            <span className="product__delivery-icon">?</span>
            30 Tage kostenlose Produkt-Rückgabe/Umtausch.{' '}
            <span className="product__delivery-link">Mehr erfahren</span>
          </p>
        </div>
      </div>
    </section>
  );
}