import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/SignedInHeader';
import Footer from '../components/Footer';
import ShippingOption from '../components/ShippingOption';
import OrderNotes from '../components/OrderNotes';
import OrderSummary from '../components/OrderSummary';
import PaymentMethod from '../components/PaymentMethod';

function CheckoutPage() {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '', lastName: '', country: '', town: '',
    streetAddress: '', apartment: '', state: '', zip: '',
    email: '', phone: ''
  });
  const [shippingDifferent, setShippingDifferent] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assume order submission API call here
      const response = await fetch('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/orders/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ billingInfo, paymentMethod, orderNotes }),
      });

      if (response.ok) {
        // If the order is successfully placed
        navigate('/'); // Redirect to homepage
      } else {
        // Handle any errors
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBillingAddressChange = () => {
    navigate('/addresspage'); // Redirect to billing address form page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-sm breadcrumbs mb-4">
            <p>
              <span><a href="/" className="hover:underline">Home</a> / </span>
              <span><a href="/shop" className="hover:underline">Shop</a> / </span>
              <span>Checkout</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 ">

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <OrderSummary />
              <OrderNotes 
                orderNotes={orderNotes}
                setOrderNotes={setOrderNotes}
              />
              <PaymentMethod 
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-4 transition duration-300">
                Place Order
              </button>
              <button 
                type="button"
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 mt-4 transition duration-300"
                onClick={handleBillingAddressChange}
              >
                Change Billing Address
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CheckoutPage;
