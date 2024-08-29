import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';
import logoHeader from '../Images/logoheader.png';
import Login from '../Screens/Login';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact Us', to: '#footer' },
    { label: 'Categories', onClick: toggleCategories },
  ];

  const categories = [
    { label: 'Laptops', to: '/category/laptops' },
    { label: 'Monitors', to: '/category/monitors' },
    { label: 'Accessories', to: '/category/accessories' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoHeader} alt="YAK COMPUTERS Logo" className="h-8 w-auto mr-2" />
          <div className="text-lg md:text-2xl font-extrabold">YAK COMPUTERS</div>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition duration-300 focus:outline-none"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <CiSearch className="w-6 h-6" />
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition duration-300 focus:outline-none relative group"
            onClick={toggleDropdown}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div className="absolute w-full h-0.5 bg-blue-600 left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
          <Login name="Shop Now" className="text-sm md:text-lg px-3 py-1 md:px-6 md:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"/>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${isSearchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'} md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="relative p-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full border rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          />
          <button
            onClick={toggleSearch}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="p-4">
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
                    <ul className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isCategoriesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {categories.map((category, catIndex) => (
                        <li key={catIndex}>
                          <NavLink
                            to={category.to}
                            className={({ isActive }) => 
                              `block text-gray-600 hover:text-blue-600 active:text-blue-800 transition duration-300 transform hover:translate-x-2 relative group ${isActive ? 'text-blue-600' : ''}`
                            }
                            onClick={toggleDropdown}
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
                    onClick={toggleDropdown}
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
    </header>
  );
}

export default Header;