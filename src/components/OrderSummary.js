import React from 'react';

function OrderSummary() {
  return (
    <div className="bg-white p-4 rounded-md shadow mb-6">
      <h3 className="font-bold mb-4 text-lg">Products</h3>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src="/asus-rog-strix.jpg" alt="ASUS ROG Strix" className="w-16 h-16 object-cover mr-4 rounded" />
          <span className="text-sm md:text-base">ASUS ROG Strix Workstation (x 3)</span>
        </div>
        <span className="font-medium">GH₵ 6000.00</span>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>GH₵ 6000.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>GH₵ 20.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>GH₵ 6020.00</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;