import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faShoppingCart, faTrash, faAdd, faPen
} from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';

const EditProduct = () => {

  return (
    <div className="container mx-auto px-4 py-8">
      <SignedInHeader />
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 pr-4 md:pr-8 mb-6 md:mb-0">
          <nav>
            <Link to="/admin" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-3" /> Admin Dashboard
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3" /> Orders Made
            </Link>
            <Link to="/addproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faAdd} className="mr-3" /> Add Product
            </Link>
            <Link to="/editproduct" className="flex items-center text-blue-600 mb-4">
              <FontAwesomeIcon icon={faPen} className="mr-3" /> Edit Product
            </Link>
            <Link to="/deleteproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faTrash} className="mr-3" /> Delete Product
            </Link>
          </nav>
        </aside>

        <main className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category<span className="text-red-500">*</span></label>
                <select className="w-full p-3 border border-gray-300 rounded">
                  <option value="" disabled>Select Category</option>
                  <option value="monitor">Monitor</option>
                  <option value="systemUnit">System Unit</option>
                  <option value="ram">RAM</option>
                  <option value="laptop">Laptop</option>
                  <option value="allInOnePc">All-In-One PC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price <span className="text-red-500">*</span></label>
                <input type="number" className="w-full p-3 border border-gray-300 rounded" placeholder='GHC' />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description<span className="text-red-500">*</span></label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 transition" 
                  rows="4">
                </textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                <input type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded" />
              </div>
            </div>

            <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto">Save Changes</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EditProduct;