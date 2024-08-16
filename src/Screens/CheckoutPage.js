import React, { useState } from 'react';
import logoHeader from '../Images/logoheader.png';
import Footer from '../components/Footer';
import BillingAddressForm from '../components/BillingAddressForm';
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className='flex flex-row items-center'>
            <img src={logoHeader} alt="YAK COMPUTERS" className="h-8 mr-2" />
            <p className='font-extrabold text-base md:text-lg'>YAK COMPUTERS</p>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-blue-600 font-medium">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </nav>
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-gray-900 mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900 mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-sm breadcrumbs mb-4">
            <p>
              <span><a href="#" className="hover:underline">Home</a> / </span>
              <span><a href="#" className="hover:underline">Shop</a> / </span>
              <span>Checkout</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <BillingAddressForm 
                billingInfo={billingInfo} 
                handleInputChange={handleInputChange}
              />
              <ShippingOption 
                shippingDifferent={shippingDifferent}
                setShippingDifferent={setShippingDifferent}
              />
              <OrderNotes 
                orderNotes={orderNotes}
                setOrderNotes={setOrderNotes}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <OrderSummary />
              <PaymentMethod 
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-4 transition duration-300">
                Place Order
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