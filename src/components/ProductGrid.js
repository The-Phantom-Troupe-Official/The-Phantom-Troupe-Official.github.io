import React from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';

function ProductGrid({ products = [], loading, error, currentPage, totalPages, onPageChange }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Add a safe check for products
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-l hover:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-r hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}


export default ProductGrid;
