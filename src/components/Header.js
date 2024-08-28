// src/components/Header.js

import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import logoHeader from '../Images/logoheader.png';
import Login from '../Screens/Login';
import Modal from './Modal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact Us', to: '#footer' },
    { label: 'Categories', onClick: toggleCategories },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoHeader} alt="YAK COMPUTERS Logo" className="h-8 w-auto mr-2" />
          <div className="text-xl md:text-2xl font-extrabold">YAK COMPUTERS</div>
        </Link>
        <div className="flex items-center space-x-4 md:hidden">
          <CiSearch className="text-gray-600 hover:text-blue-600 w-6 h-6" onClick={() => setIsMenuOpen(false)} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="hidden md:block border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          />
        </div>
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 transition duration-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Login name="Shop Now" />
      </div>

      {/* Hamburger Menu Modal */}
      <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="block text-gray-600 hover:text-blue-600 transition duration-300 w-full text-left"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink to={item.to} className="block text-gray-600 hover:text-blue-600 transition duration-300">
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          />
        </div>
      </Modal>

      {/* Categories Modal */}
      <Modal isOpen={isCategoriesOpen} onClose={toggleCategories}>
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-3">
          <li><NavLink to="/category/laptops" className="text-gray-600 hover:text-blue-600 transition duration-300">Laptops</NavLink></li>
          <li><NavLink to="/category/monitors" className="text-gray-600 hover:text-blue-600 transition duration-300">Monitors</NavLink></li>
          <li><NavLink to="/category/accessories" className="text-gray-600 hover:text-blue-600 transition duration-300">Accessories</NavLink></li>
          {/* Add more categories as needed */}
        </ul>
      </Modal>
    </header>
  );
}

export default Header;


