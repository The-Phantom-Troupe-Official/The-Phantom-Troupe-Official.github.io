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
    axios.get(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/product/${id}`)
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
              className="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => handleQuantityChange('increment')}
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>
          <button
            onClick={() => navigate('/cart')}
            className="bg-blue-600 mt-4 w-full py-2 px-4 text-center rounded-lg font-semibold text-white hover:bg-blue-500 transition duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate('/wishlist')}
            className="mt-2 w-full py-2 px-4 text-center rounded-lg border border-gray-500 text-white hover:bg-gray-800 transition duration-300"
          >
            <FaHeart className="inline mr-2" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
