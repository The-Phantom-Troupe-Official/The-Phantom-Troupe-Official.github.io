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

  const productsPerPage = 8;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/products/`, 
          {
            params: {
              category: selectedCategory || undefined,
              page: currentPage,
              limit: productsPerPage,
            }
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
    <div className="flex">
      <Sidebar onCategorySelect={handleCategorySelect} />
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
