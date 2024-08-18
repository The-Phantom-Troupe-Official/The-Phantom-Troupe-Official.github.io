import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sideBar';
import ProductGrid from './ProductGrid';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/products/products?category=${encodeURIComponent(selectedCategory)}`);
          setProducts(response.data);
        } catch (err) {
          setError('Error fetching products');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="flex">
      <Sidebar onCategorySelect={handleCategorySelect} className="md:w-1/4 lg:w-1/5"/>
      <main className="flex-grow p-4">
        <ProductGrid products={products} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default ProductPage;
