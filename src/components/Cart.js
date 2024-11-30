// src/components/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to proceed.');
    } else {
      navigate('/checkout'); // Navigate to the checkout page
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <span>{item.name}</span>
                <span> - ${item.price} x {item.quantity}</span>
                <span> = ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>
            Total: $
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
          </h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;