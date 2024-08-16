import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaPlus, FaMinus, FaHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://api.example.com/product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (!product) {
    return <div className="text-center text-white p-6">Loading...</div>;
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-900 text-white max-w-4xl mx-auto rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"/>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-4 md:mt-0">{product.name}</h1>
          <p className="text-xl sm:text-2xl text-blue-400 mt-2 font-bold">GH₵ {product.price.toFixed(2)}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(Math.round(product.rating))].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <span className="ml-2 text-gray-400 font-normal text-sm sm:text-base">{product.reviews} Customer Reviews</span>
          </div>
          <div className="border-b border-gray-700 my-4">
            <p className='font-medium text-base sm:text-lg'>Description</p>
            <p className="text-gray-400 font-normal text-sm sm:text-base">
              {product.description}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <button
              className="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => handleQuantityChange('decrement')}
              aria-label="Decrease quantity"
            >
              <FaMinus />
            </button>
            <span className="mx-3 text-lg">{quantity}</span>
            <button
              className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400"
              onClick={() => handleQuantityChange('increment')}
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex-grow bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400" onClick={() => navigate('/checkout')}>BUY NOW</button>
            <button className="flex-grow bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600">ADD TO CART</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600" aria-label="Add to favorites">
              <FaHeart />
            </button>
          </div>
          <div className="mt-4">
            <span className="text-gray-400 text-sm sm:text-base">Categories: {product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;