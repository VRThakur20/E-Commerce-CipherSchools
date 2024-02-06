
import React from 'react';

const ShoppingCart = ({ cart, onClose }) => {
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close Cart</button>
    </div>
  );
};

export default ShoppingCart;
