// SideMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const SideMenu = ({ isOpen, toggleMenu, categories, menuItems, isCategoriesOpen, toggleCategories }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 text-gray-600 hover:text-blue-600 transition duration-300"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="mt-16 p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.onClick ? (
                <div>
                  <button
                    onClick={item.onClick}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 active:text-blue-800 transition duration-300 group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                    <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  <ul className={`ml-4 mt-2 space-y-2 ${isCategoriesOpen ? 'block' : 'hidden'}`}>
                    {categories.map((category, catIndex) => (
                      <li key={catIndex}>
                        <NavLink
                          to={category.to}
                          className={({ isActive }) => 
                            `block text-gray-600 hover:text-blue-600 active:text-blue-800 transition duration-300 transform hover:translate-x-2 relative group ${isActive ? 'text-blue-600' : ''}`
                          }
                          onClick={toggleMenu}
                        >
                          <span className="relative">
                            {category.label}
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `block text-gray-600 hover:text-blue-600 active:text-blue-800 transition duration-300 transform hover:translate-x-2 relative group ${isActive ? 'text-blue-600' : ''}`
                  }
                  onClick={toggleMenu}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
