import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from '../components/SignedInHeader';
import Footer from '../components/Footer';
import { Navigate} from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Memoize fetchCartItems to prevent unnecessary re-renders
  const fetchCartItems = useCallback(async () => {
    try {
      const response = await axios.get('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/cart/');
      setCartItems(response.data);
      calculateTotalPrice(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }, []); // Empty dependency array means fetchCartItems won't change

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]); // Add fetchCartItems to the dependency array

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleCheckout = () => {
Navigate('/checkout');
};

  return (
    <div className="cart-page">
      <Header/>
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button onClick={handleCheckout} className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
