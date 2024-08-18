import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faShoppingCart, faTrash, faAdd, faPen
} from '@fortawesome/free-solid-svg-icons';
import SignedInHeader from '../components/SignedInHeader';
import axios from 'axios'; // Import axios for HTTP requests

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from the route parameters
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });

  useEffect(() => {
    // Fetch the product details when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/admin/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setProduct(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('price', product.price);
    formData.append('description', product.description);
    if (product.image) formData.append('image', product.image);

    try {
      await axios.put(`/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error updating product:', error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category<span className="text-red-500">*</span></label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                >
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
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder='GHC'
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description<span className="text-red-500">*</span></label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 transition"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                />
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
