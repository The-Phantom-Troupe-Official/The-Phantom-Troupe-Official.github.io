import React from 'react';
import Login from '../Screens/Login'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-gray-100 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">DO YOU WANT TO BUILD A CUSTOM PC?</h2>
          <p className="mb-4 text-sm sm:text-base">We offer custom PC building services to meet your specific needs.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
            <Link to='#footer'>Contact Us</Link>
          </button>
        </div>
        <div className="bg-gray-100 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">WE OFFER REPAIR SERVICES</h2>
          <p className="mb-4 text-sm sm:text-base">Expert PC repair services available.</p>
          <Login name='Find More'/>
        </div>
      </div>
    </div>
  );
}

export default Services;