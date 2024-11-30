import React, { useState } from 'react';
import { useCart } from './CartContext';

function Checkout() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  const handleProceedToPayment = () => {
    setIsPaymentPage(true); 
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    
    alert('Payment successful! Thank you for your order.');
    
  };

  if (isPaymentPage) {
    return (
      <div>
        <h2>Payment Information</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="address">Shipping Address:</label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="card">Credit Card Number:</label>
            <input type="text" id="card" required />
          </div>
          <div>
            <label htmlFor="expiry">Expiry Date:</label>
            <input type="text" id="expiry" required />
          </div>
          <button type="submit">Complete Payment</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed.</p>
      ) : (
        <div>
          <h3>Your Order Summary:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;