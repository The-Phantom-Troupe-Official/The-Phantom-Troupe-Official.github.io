import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import logoHeader from '../Images/logoheader.png';

function SignedInHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to='/home' className="flex items-center">
            <img src={logoHeader} alt="YAK COMPUTERS Logo" className="h-8 mr-2" />
            <div className="text-xl sm:text-2xl font-extrabold">YAK COMPUTERS</div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/home" className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="#footer" className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="#footer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <button onClick={() => navigate('/accountdetails')} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="mt-4">
            <input type="text" placeholder="Search" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2">
          <ul className="space-y-2">
            <li><Link to="/" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link></li>
            <li><Link to="#footer" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default SignedInHeader;