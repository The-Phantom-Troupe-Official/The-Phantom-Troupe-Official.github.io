import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sideBar';
import ProductGrid from './ProductGrid';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 8;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === 'All' ? null : category); // Set to null if 'All' is selected
    setCurrentPage(1); // Reset to first page on category change
  };

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
            }
          }
        );
        setProducts(response.data.products || []); // Handle empty product list
        setTotalPages(response.data.totalPages || 1);
      } catch (err) {
        setError('Error fetching products');
        setProducts([]); // Reset products on error
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage]); // Trigger re-fetch when category or page changes

  return (
    <div className="flex">
      <Sidebar 
        onCategorySelect={handleCategorySelect} 
        selectedCategory={selectedCategory}
      />
      <main className="flex-grow p-4">
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>
    </div>
  );
}

export default ProductPage;
