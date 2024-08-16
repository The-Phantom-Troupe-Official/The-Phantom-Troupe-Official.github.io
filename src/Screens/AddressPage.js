import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faShoppingCart, faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';
import Footer from '../components/Footer';

const AddressPage = () => {
  const [sameAsBilling, setSameAsBilling] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <SignedInHeader />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 pr-0 lg:pr-8">
          <h2 className="text-xl font-bold mb-4">My Account</h2>
          <nav className="space-y-4">
            <Link to="/accountdetails" className="flex items-center text-gray-600 hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faUser} className="mr-5" /> Account Details
            </Link>
            <Link to="/addresspage" className="flex items-center text-blue-600 hover:text-blue-800 transition">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-5" /> Address
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-5" /> Orders
            </Link>
            <Link to="/pccustomize" className="flex items-center text-gray-600 hover:text-blue-600 transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Pc Customization
            </Link>
          </nav>
          <div>
            <Link to="/" className="flex items-center text-gray-600 mt-8 hover:text-red-600 transition">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-5" /> Logout
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Billing Address</h2>
            <button className="text-blue-600 hover:underline">Add</button>
          </div>
          <p className="text-gray-600 mb-6">The following addresses will be used on the checkout page by default.</p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country / Region <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Select a country / region</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Town / City <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address <span className="text-red-500">*</span></label>
                <input type="text" placeholder="House number and street name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Select a state</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex">
                  <select className="p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>+233</option>
                  </select>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Save Address</button>
          </form>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Shipping Address</h2>
              <button className="text-blue-600 hover:underline">Add</button>
            </div>
            <p className="text-gray-600 mb-4">You have not set up this type of address yet.</p>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 transition" checked={sameAsBilling} onChange={() => setSameAsBilling(!sameAsBilling)} />
              <span className="ml-2 text-gray-700">Same as billing address</span>
            </label>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AddressPage;
