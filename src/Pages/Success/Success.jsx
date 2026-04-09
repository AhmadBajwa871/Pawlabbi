import { useEffect } from 'react';
import { useCart } from '../../Context/CartContext';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>Payment successful</h1>
      <p>Your order has been placed successfully.</p>
    </section>
  );
}