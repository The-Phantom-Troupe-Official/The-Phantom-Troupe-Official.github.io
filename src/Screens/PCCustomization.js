import React, { useState } from 'react';
import SignedInHeader from '../components/SignedInHeader'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faMapMarkerAlt, faShoppingCart, faSignOutAlt, faLaptop
} from '@fortawesome/free-solid-svg-icons';

const PCCustomizationPage = () => {
  const [formData, setFormData] = useState({
    processor: '',
    ram: '',
    storage: '',
    graphicsCard: '',
    operatingSystem: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/customize/customize-pc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Custom PC request submitted successfully!');
      } else {
        alert('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SignedInHeader />
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">PC Customization</h2>
          <nav className="space-y-2">
            <NavLink to="/accountdetails" icon={faUser} text="Account Details" />
            <NavLink to="/addresspage" icon={faMapMarkerAlt} text="Address" />
            <NavLink to="/orders" icon={faShoppingCart} text="Orders" />
            <NavLink to="/pccustomize" icon={faLaptop} text="PC Customization" active />
          </nav>
          <div className="mt-8">
            <NavLink to="/" icon={faSignOutAlt} text="Logout" />
          </div>
        </aside>

        <div className="w-full lg:w-3/4 lg:pl-8">
          <h1 className="text-2xl font-bold mb-6">Customize Your Gaming PC</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Processor"
                name="processor"
                value={formData.processor}
                onChange={handleChange}
                options={[
                  "Intel Core i9-13900K",
                  "Intel Core i7-12700K",
                  "Intel Core i5-12600K",
                  "Intel Core i3-12100K"
                ]}
              />
              <FormField
                label="RAM"
                name="ram"
                value={formData.ram}
                onChange={handleChange}
                options={["16GB", "32GB", "64GB", "128GB"]}
              />
              <FormField
                label="Storage"
                name="storage"
                value={formData.storage}
                onChange={handleChange}
                options={[
                  "500GB HDD", "1TB HDD", "2TB HDD", "4TB HDD",
                  "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"
                ]}
              />
              <FormField
                label="Graphics Card"
                name="graphicsCard"
                value={formData.graphicsCard}
                onChange={handleChange}
                options={[
                  "NVIDIA GeForce RTX 4090",
                  "AMD Radeon RX 7900 XTX",
                  "NVIDIA GeForce RTX 3080",
                  "AMD Radeon RX 6800 XT",
                  "NVIDIA GeForce RTX 3070",
                  "AMD Radeon RX 6700 XT",
                  "NVIDIA GeForce GTX 1660 Super",
                  "AMD Radeon RX 580"
                ]}
              />
              <FormField
                label="Operating System"
                name="operatingSystem"
                value={formData.operatingSystem}
                onChange={handleChange}
                options={["Windows 11", "Windows 10"]}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 transition"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Submit Custom PC Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, icon, text, active }) => (
  <Link to={to} className={`flex items-center text-gray-600 hover:text-blue-600 transition ${active ? 'text-blue-600 font-semibold' : ''}`}>
    <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-3" />
    {text}
  </Link>
);

const FormField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block mb-2 font-semibold" htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 transition"
      required
    >
      <option value="" disabled>Select {label}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default PCCustomizationPage;