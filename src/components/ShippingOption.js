import React from 'react';

function ShippingOption({ shippingDifferent, setShippingDifferent }) {
  return (
    <div className="mt-6">
      <label className="inline-flex items-center">
        <input type="checkbox" checked={shippingDifferent} onChange={(e) => setShippingDifferent(e.target.checked)}
               className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="ml-2 text-gray-700">Ship to a different address?</span>
      </label>
    </div>
  );
}

export default ShippingOption;