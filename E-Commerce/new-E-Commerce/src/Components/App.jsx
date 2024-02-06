
import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './app.css';

const App = () => {
  const productsPerPage = 5;
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app">
      <header>
        <h1>My Product App</h1>
        <button className="cart-button" onClick={handleToggleCart}>
          View Cart ({cart.length})
        </button>
      </header>
      <ProductList productsPerPage={productsPerPage} onAddToCart={handleAddToCart} />
      {showCart && (
        <ShoppingCart cart={cart} onClose={handleToggleCart} />
      )}
    </div>
  );
};

export default App;
