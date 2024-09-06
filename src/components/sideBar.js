import React from 'react';

function Sidebar({ onCategorySelect }) {
  const categories = ['System Units', 'Desktop PCs', 'Workstations', 'Gaming PCs', 'Mini PCs',
    'Monitors', 'Computer Accessories', 'All-in-One Computers', 'Laptops',
    'Macs', 'Customized PCs'];

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <aside className="w-64">
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)} className="cursor-pointer p-4 hover:bg-gray-200">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
