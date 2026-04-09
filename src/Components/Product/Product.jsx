import { useState } from 'react'
import './Product.css'
import { useCart } from '../../Context/CartContext'

const cart_icon = '/assets/product/cart.png'

const thumbnails = [
  '/assets/product/1.png',
  '/assets/product/2.png',
  '/assets/product/3.png',
  '/assets/product/4.png',
]

export default function Product() {
  const [activeThumb, setActiveThumb] = useState(0)
  const [added, setAdded] = useState(false)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Pawbottle",
      price: 44.5,
      image: thumbnails[activeThumb],
    })

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  return (
    <>
      <section className="product">

        {/* LEFT */}
        <div className="product__images">

          <div className="product__main-image">
            <img src={thumbnails[activeThumb]} alt="" />
          </div>

          <div className="product__thumbs">
            {thumbnails.map((src, index) => (
              <div
                key={index}
                className={`product__thumb ${index === activeThumb ? 'product__thumb--active' : ''}`}
                onClick={() => setActiveThumb(index)}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="product__info">

          <h2 className="product__title">
            Pawbottle Thermo Trinkflasche Für Haustiere Hunde & Katzen
          </h2>

          <div className="product__rating">
            <span className="product__star">★</span>
            <span className="product__rating-text">4.8/5 (50 Ratings)</span>
          </div>

          <div className="product__price">$44.50</div>

          <hr className="product__divider" />

          <div className="product__about">
            <h4 className="product__about-title">Über Das Produkt</h4>
            <ul className="product__about-list">
              <li>
                Pawbottle Thermo Trinkflasche für Haustiere Hunde & Katzen mit 2 Näpfen...
              </li>
            </ul>
          </div>

          {/* ACTIONS */}
          <div className="product__actions">

            <button
              className="product__btn-cart"
              onClick={handleAddToCart}
            >
              <span className="product__btn-cart-icon">
                <img src={cart_icon} alt="" />
              </span>
              Add to cart
            </button>

            <button className="product__btn-icon">♥</button>
            <button className="product__btn-icon">⇄</button>

          </div>

          <hr className="product__divider" />

          <div className="product__delivery">
            <h4 className="product__delivery-title">Lieferung</h4>
            <p className="product__delivery-location">
              <span className="product__delivery-link">Standort auswählen</span>
              {' '}um die Versandkosten zu berechnen.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 TOAST MESSAGE */}
      {added && (
        <div className="product__toast">
          ✅ Added to cart
        </div>
      )}
    </>
  )
}