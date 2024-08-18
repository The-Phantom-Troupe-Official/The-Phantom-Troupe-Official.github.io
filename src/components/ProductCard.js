import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const viewProduct = () => {
    navigate(`/productview/${product.id}`);
  };

  const addToCart = async (e) => {
    e.stopPropagation();
    try {
      await axios.post('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/cart/', { productId: product.id, quantity: 1 });
      alert('Product added to cart!');
    } catch (err) {
      alert('Error adding product to cart');
    }
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 max-w-sm mx-auto">
      <div onClick={viewProduct} className="cursor-pointer">
        <div className="relative aspect-w-1 aspect-h-1">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg sm:text-xl mb-2 truncate">{product.name}</h3>
          <p className="text-blue-600 font-bold text-xl sm:text-2xl mb-4">GHS {product.price.toFixed(2)}</p>
          <div className="flex justify-between items-center">
            <button 
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              onClick={addToCart}
              aria-label="Add to cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button 
              className={`${isFavorite ? 'text-red-600' : 'text-gray-400'} hover:text-red-600 transition-colors duration-300`}
              onClick={toggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 sm:h-8 sm:w-8" 
                fill={isFavorite ? "currentColor" : "none"} 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;