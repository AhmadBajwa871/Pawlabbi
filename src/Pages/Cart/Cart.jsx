import './Cart.css'
import { useCart } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cartItems, removeFromCart, addToCart } = useCart()
  const navigate = useNavigate()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <section className="cart">

      <h2 className="cart__title">Your Cart</h2>

      <div className="cart__container">

        {/* LEFT */}
        <div className="cart__items">

          {cartItems.length === 0 && (
            <p className="cart__empty">Your cart is empty</p>
          )}

          {cartItems.map(item => (
            <div className="cart__item" key={item.id}>

              <img src={item.image} className="cart__img" />

              <div className="cart__info">
                <h4>{item.name}</h4>
                <p className="cart__price">${item.price}</p>

                <div className="cart__qty">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>

              <button
                className="cart__remove"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="cart__summary">

          <h3>Order Summary</h3>

          <div className="cart__row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="cart__row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="cart__total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button
            className="cart__checkout"
            onClick={() => navigate('/checkout')}
          >
            Checkout
          </button>

        </div>

      </div>
    </section>
  )
}