import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faShoppingCart, faTrash, faPlus, faPen
} from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';
import axios from 'axios'; // Import axios for HTTP requests

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (name === 'image1') setImage1(files[0]);
      if (name === 'image2') setImage2(files[0]);
      if (name === 'image3') setImage3(files[0]);
    } else {
      if (name === 'productId') setProductId(value);
      if (name === 'category') setCategory(value);
      if (name === 'price') setPrice(value);
      if (name === 'description') setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/admin/products/${productId}`, {
        data: {
          category,
          price,
          description,
          image1,
          image2,
          image3
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SignedInHeader />
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
          <nav>
            <Link to="/admin" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-5" /> Admin Dashboard
            </Link>
            <Link to="/orders" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-5" /> Orders Made
            </Link>
            <Link to="/addproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faPlus} className="mr-5" /> Add Product
            </Link>
            <Link to="/editproduct" className="flex items-center text-gray-600 mb-4">
              <FontAwesomeIcon icon={faPen} className="mr-5" /> Edit Product
            </Link>
            <Link to="/deleteproduct" className="flex items-center text-blue-600 mb-4">
              <FontAwesomeIcon icon={faTrash} className="mr-5" /> Delete Product
            </Link>
          </nav>
        </aside>

        <main className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-6">Delete Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product ID<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="productId"
                  value={productId}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category<span className="text-red-500">*</span></label>
                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
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
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder='GHC'
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description<span className="text-red-500">*</span></label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 transition"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 1</label>
                <input
                  type="file"
                  name="image1"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 2</label>
                <input
                  type="file"
                  name="image2"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image 3</label>
                <input
                  type="file"
                  name="image3"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <button type="submit" className="mt-6 bg-red-600 text-white px-6 py-2 rounded w-full md:w-auto">Delete Product</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default DeleteProduct;
