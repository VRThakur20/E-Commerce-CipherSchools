
import React from 'react';
import './styles.css';
const Product = ({ id, title, description, price, image, onAddToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart({ id, title, price })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
