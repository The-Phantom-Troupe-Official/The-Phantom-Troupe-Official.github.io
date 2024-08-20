import React from 'react';
import Image1 from '../Images/PC.jpg';

const RelatedProducts = () => {
  const relatedProducts = [
    { id: 1, name: 'Product 1', price: 1200, image: {Image1} },
  ];

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {relatedProducts.map(product => (
          <div key={product.id} className="flex flex-col text-center p-3 sm:p-4 border rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-32 sm:h-40 object-cover mb-2 rounded" />
            <p className="font-semibold text-sm sm:text-base mb-1 truncate">{product.name}</p>
            <p className="text-blue-600 font-bold">GHC {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;