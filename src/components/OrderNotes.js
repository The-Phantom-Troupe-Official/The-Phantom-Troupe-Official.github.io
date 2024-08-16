import React from 'react';

function OrderNotes({ orderNotes, setOrderNotes }) {
  return (
    <div className="mt-6">
      <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700">Order notes (optional)</label>
      <textarea id="orderNotes" name="orderNotes" value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
    </div>
  );
}

export default OrderNotes;