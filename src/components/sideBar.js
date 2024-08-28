import React from 'react';

function Sidebar({ onCategorySelect }) {
  const categories = [
    'System Units', 'Desktop PCs', 'Workstations', 'Gaming PCs', 'Mini PCs',
    'Monitors', 'Computer Accessories', 'All-in-One Computers', 'Laptops',
    'Macs', 'Customized PCs'
  ];

  const [priceRange, setPriceRange] = React.useState(0);

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <aside className="hidden md:block w-full md:w-64 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 w-full text-left"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Price Range</h2>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="w-full accent-blue-600" 
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>GHS {priceRange}</span>
          <span>GHS 1000</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
