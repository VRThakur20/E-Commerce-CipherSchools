import React, { useState } from 'react';
import Product from './Product';
import './styles.css';

const ProductList = ({ productsPerPage, onAddToCart })=> {
  const initialProducts = [

    {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 1000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (1).jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 2000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (2).jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description for Product 3',
      price: 1500,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (3).jpg',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Description for Product 4',
      price: 2700,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (4).jpg',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Description for Product 5',
      price: 3000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (5).jpg',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Description for Product 6',
      price: 3000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (2).jpg',
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Description for Product 7',
      price: 3000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (4).jpg',
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Description for Product 8',
      price: 3000,
      image: 'E-Commerce\new-E-Commerce\src\Components\img5 (1).jpg',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const products = initialProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-list"> 
    <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} {...product} onAddToCart={onAddToCart} />
      ))}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage * productsPerPage >= initialProducts.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;