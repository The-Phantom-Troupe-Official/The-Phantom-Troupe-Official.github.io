import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sideBar';
import ProductGrid from './ProductGrid';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 8; // Adjust as needed

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/products/products?category=${encodeURIComponent(selectedCategory)}&page=${currentPage}&limit=${productsPerPage}`);
          setProducts(response.data.products); // Assuming the API returns an array of products in `products`
          setTotalPages(response.data.totalPages); // Assuming the API returns the total number of pages
        } catch (err) {
          setError('Error fetching products');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage]);

  return (
    <div className="flex">
      <Sidebar onCategorySelect={handleCategorySelect} className="md:w-1/4 lg:w-1/5"/>
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
