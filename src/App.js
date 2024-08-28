import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/RegisterPage';
import Checkout from './Screens/CheckoutPage';
import AccountDetails from './Screens/AccountDetails';
import AddressPage from './Screens/AddressPage';
import ProductView from './Screens/ProductView';
import PCCustomization from './Screens/PCCustomization';
import LandingPage from './Screens/LandingPage';
import ForgotPassword from './Screens/ForgotPassword';
import Cart from './Screens/Cart';
import './tailwind.css';
import axios from 'axios';
import ResetPassword from './Screens/ResetPassword';
import HandleRedirect from './components/HandleRedirect';

const apiBaseUrl = 'https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${apiBaseUrl}/`)
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <BrowserRouter>
      <HandleRedirect /> 

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addresspage" element={<AddressPage />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pccustomize" element={<PCCustomization />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword/:token" element={<ResetPassword />} />  
      </Routes>
      <p>{message}</p>
    </BrowserRouter>
  );
}

export default App;
