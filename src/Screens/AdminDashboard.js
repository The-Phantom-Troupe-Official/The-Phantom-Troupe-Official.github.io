import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faShoppingCart, faTrash, faAdd, faPen,
  faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <SignedInHeader />
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
          <nav>
            <Link to="/admin" className="flex items-center text-blue-600 mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-5" /> Admin Dashboard
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-5" /> Orders Made
            </Link>
            <Link to="/addproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faAdd} className="mr-5" /> Add Product
            </Link>
            <Link to="/editproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faPen} className="mr-5" /> Edit Product
            </Link>
            <Link to="/deleteproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faTrash} className="mr-5" /> Delete Product
            </Link>
          </nav>
        </aside>

        <main className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex">
                  <select className="p-2 border border-gray-300 rounded-l">
                    <option>+233</option>
                  </select>
                  <input type="tel" className="w-full p-2 border border-gray-300 rounded-r" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <div className="flex items-center">
                  <span className="mr-2">😊</span>
                  <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Change</button>
                  <button type="button" className="text-gray-600">Remove</button>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Password Change</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New password</label>
                <div className="relative">
                  <input type={showNewPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded" />
                  <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm new password</label>
                <div className="relative">
                  <input type={showConfirmPassword ? "text" : "password"} className="w-full p-2 border border-gray-300 rounded" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded w-full md:w-auto">Save Changes</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
