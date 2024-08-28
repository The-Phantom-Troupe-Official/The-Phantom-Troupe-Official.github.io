import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';
import logoHeader from '../Images/logoheader.png';
import Login from '../Screens/Login';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          <div className="text-xl md:text-2xl font-extrabold">YAK COMPUTERS</div>
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
            className="md:hidden text-gray-600 hover:text-blue-600 transition duration-300 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Login name="Shop Now" className="text-lg px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"/>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${isSearchOpen ? 'block' : 'hidden'} md:hidden bg-white p-4`}>
        <div className="relative">
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-blue-600">
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.onClick ? (
                  <div>
                    <button
                      onClick={item.onClick}
                      className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition duration-300"
                    >
                      {item.label}
                      <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    {isCategoriesOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {categories.map((category, catIndex) => (
                          <li key={catIndex}>
                            <NavLink
                              to={category.to}
                              className="block text-gray-600 hover:text-blue-600 transition duration-300"
                              onClick={toggleSidebar}
                            >
                              {category.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.to}
                    className="block text-gray-600 hover:text-blue-600 transition duration-300"
                    onClick={toggleSidebar}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
}

export default Header;