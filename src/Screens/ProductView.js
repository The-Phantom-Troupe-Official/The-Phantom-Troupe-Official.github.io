// src/components/ProductView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL params
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';

const ProductView = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams(); // Get productId from URL params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/products/${productId}`); // Replace with your API endpoint
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching product data.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Depend on productId to refetch if it changes

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default ProductView;
