import './Checkout.css';
import { useCart } from '../../Context/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async () => {
    if (!form.name || !form.email || !form.address) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item.id?.toString(),
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          customer: form,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to server.');
    }
  };

  return (
    <section className="checkout">
      <div className="checkout__container">
        <div className="checkout__form">
          <h2>Checkout</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="postalCode" placeholder="Postal Code" onChange={handleChange} />
          <input name="country" placeholder="Country" onChange={handleChange} />

          <button className="checkout__btn" onClick={handleOrder}>
            Complete Order
          </button>
        </div>

        <div className="checkout__summary">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="checkout__item">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr />

          <div className="checkout__total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}