import React from "react";
import ProductCard from './ProductCard'
import Image1 from '../Images/Rectangle 113 (1).png'
import Image2 from '../Images/Rectangle 113.png'
import Image3 from '../Images/—Pngtree—water cooled gaming pc with_15318038 1.png'

function ProductGrid() {
    const products = [
      { id: 1, name: 'Desktop Computer 16GB RAM', price: 1199.00, image: Image1 },
      { id: 2, name: 'Angel Wing Bonanza', price: 1199.00, image: Image2 },
      { id: 3, name: 'PC Name Placeholder', price: 1199.00, image: Image3 },
    ];
  
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

export default ProductGrid;