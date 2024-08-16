import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../Images/yak_computers_logo_header.png';
import Login from '../Screens/Login';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '#footer' },
    { label: 'Contact Us', href: '#footer' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoHeader} alt="YAK COMPUTERS Logo" className="h-8 w-auto mr-2" />
          <div className="text-xl md:text-2xl font-extrabold">YAK COMPUTERS</div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-gray-600 hover:text-blue-600 font-semibold transition duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <input type="text" placeholder="Search" className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300" />
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
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 absolute w-full">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block text-gray-600 hover:text-blue-600 transition duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input type="text" placeholder="Search" className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;