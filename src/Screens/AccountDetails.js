import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faShoppingCart, faSignOutAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';
import Footer from '../components/Footer';

const AccountDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <SignedInHeader />
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">My Account</h2>
          <nav>
            <Link to="/accountdetails" className="flex items-center text-blue-600 mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-5" /> Account Details
            </Link>
            <Link to="/addresspage" className="flex items-center text-gray-600 mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-5" /> Address
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 mb-2">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-5" /> Orders
            </Link>
            <Link to="/pccustomize" className="flex items-center text-gray-600 mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              PC Customization
            </Link>
          </nav>
          <div>
            <Link to="/" className="flex items-center text-gray-600 mt-8">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-5" /> Logout
            </Link>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select className="p-2 border border-gray-300 rounded-l focus:ring-blue-500 focus:border-blue-500">
                    <option>+233</option>
                  </select>
                  <input type="tel" className="w-full p-2 border border-gray-300 rounded-r focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                <div className="flex items-center">
                  <span className="mr-2">😊</span>
                  <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">
                    Change
                  </button>
                  <button type="button" className="text-gray-600 hover:underline">Remove</button>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Password Change</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input type={showNewPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
                  <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <div className="relative">
                  <input type={showConfirmPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Save Changes
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AccountDetails;
