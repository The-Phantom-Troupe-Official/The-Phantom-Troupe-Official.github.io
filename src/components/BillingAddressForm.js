import React from 'react';

function BillingAddressForm({ billingInfo, handleInputChange }) {
  if (!billingInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 className="text-2xl font-bold mb-4 col-span-1 md:col-span-2">Billing Address</h2>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
        <input type="text" id="firstName" name="firstName" value={billingInfo.firstName} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
        <input type="text" id="lastName" name="lastName" value={billingInfo.lastName} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region *</label>
        <select id="country" name="country" value={billingInfo.country} onChange={handleInputChange} required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option value="">Select a country / region</option>
          <option value="GH">Ghana</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address *</label>
        <input type="text" id="streetAddress" name="streetAddress" value={billingInfo.streetAddress} onChange={handleInputChange} required
               placeholder="House number and street name"
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="col-span-1 md:col-span-2">
        <input type="text" id="apartment" name="apartment" value={billingInfo.apartment} onChange={handleInputChange}
               placeholder="Apartment, suite, unit, etc. (optional)"
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="town" className="block text-sm font-medium text-gray-700">Town / City *</label>
        <input type="text" id="town" name="town" value={billingInfo.town} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
        <input type="text" id="state" name="state" value={billingInfo.state} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code *</label>
        <input type="text" id="zip" name="zip" value={billingInfo.zip} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input type="email" id="email" name="email" value={billingInfo.email} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
        <input type="tel" id="phone" name="phone" value={billingInfo.phone} onChange={handleInputChange} required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>
  );
}

export default BillingAddressForm;