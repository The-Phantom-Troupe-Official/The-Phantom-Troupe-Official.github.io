import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ products = [], loading, error, currentPage, totalPages, onPageChange }) {
  // Show loading state
  if (loading) return <p>Loading...</p>;

  // Show error state
  if (error) return <p>{error}</p>;

  // Handle the case of no products
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Featured Products</h2>

      {/* Display the product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-l ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label="Previous Page"
        >
          Previous
        </button>

        <span className="px-4 py-2 bg-gray-100">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-r ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;
