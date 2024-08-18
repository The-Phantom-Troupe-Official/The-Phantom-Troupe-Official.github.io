import React, { useEffect, useState } from 'react';

function OrderSummary() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/orders/'); // Adjust the endpoint as necessary
        const data = await response.json();
        setOrders(data.orders); // Assuming the backend returns orders in a property called "orders"
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-md shadow mb-6">
      <h3 className="font-bold mb-4 text-lg">Products</h3>
      {orders.map((order) => (
        <div key={order.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={order.productImage} // Assuming the backend provides an image URL
              alt={order.productName}
              className="w-16 h-16 object-cover mr-4 rounded"
            />
            <span className="text-sm md:text-base">
              {order.productName} (x {order.quantity})
            </span>
          </div>
          <span className="font-medium">GH₵ {order.price}</span>
        </div>
      ))}
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>GH₵ {orders.reduce((acc, order) => acc + order.price * order.quantity, 0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>GH₵ 20.00</span> {/* Update with dynamic value if available */}
        </div>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>
            GH₵ {(orders.reduce((acc, order) => acc + order.price * order.quantity, 0) + 20).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
