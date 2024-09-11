import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGrid from './ProductGrid';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 8;

  // Categories array
  const categories = [
    'All',
    'System Units',
    'Desktop PCs',
    'Workstations',
    'Gaming PCs',
    'Mini PCs',
    'Monitors',
    'Computer Accessories',
    'All-in-One Computers',
    'Laptops',
    'Macs',
    'Customized PCs',
  ];

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Fetch products based on selected category and current page
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/products/products/`,
          {
            params: {
              ...(selectedCategory && { category: selectedCategory }),
              page: currentPage,
              limit: productsPerPage,
            },
          }
        );
        setProducts(response.data.products || []);
        setTotalPages(response.data.totalPages || 1);
      } catch (err) {
        setError('Error fetching products');
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage]);

  return (
    <div className="flex flex-col p-4">
      {/* Category Selection Buttons */}
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`p-2 border rounded hover:bg-gray-200 ${
              selectedCategory === category ? 'bg-gray-300' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default ProductPage;
