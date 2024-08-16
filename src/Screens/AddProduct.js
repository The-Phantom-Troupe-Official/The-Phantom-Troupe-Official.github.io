import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faShoppingCart, faTrash, faPlus, faPen
} from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';

const AddProduct = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SignedInHeader />
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 pr-0 lg:pr-8">
          <nav className="space-y-4">
            <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600 transition mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-5" /> Admin Dashboard
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 hover:text-blue-600 transition mb-2">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-5" /> Orders Made
            </Link>
            <Link to="/addproduct" className="flex items-center text-blue-600 hover:text-blue-800 transition mb-2">
              <FontAwesomeIcon icon={faPlus} className="mr-5" /> Add Product
            </Link>
            <Link to="/editproduct" className="flex items-center text-gray-600 hover:text-blue-600 transition mb-2">
              <FontAwesomeIcon icon={faPen} className="mr-5" /> Edit Product
            </Link>
            <Link to="/deleteproduct" className="flex items-center text-gray-600 hover:text-blue-600 transition mb-2">
              <FontAwesomeIcon icon={faTrash} className="mr-5" /> Delete Product
            </Link>
          </nav>
        </aside>

        <main className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-6">Add Product</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category <span className="text-red-500">*</span></label>
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>Category</option>
                  <option value="monitor">Monitor</option>
                  <option value="systemUnit">System Unit</option>
                  <option value="ram">RAM</option>
                  <option value="laptop">Laptop</option>
                  <option value="allInOnePc">All-In-One PC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description <span className="text-red-500">*</span></label>
                <textarea className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows='4'></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 1</label>
                <input type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 2</label>
                <input type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 3</label>
                <input type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <button type="submit" className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Add Product</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
