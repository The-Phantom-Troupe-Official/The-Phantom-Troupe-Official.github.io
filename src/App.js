import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/RegisterPage';
import Checkout from './Screens/CheckoutPage';
import AccountDetails from './Screens/AccountDetails';
import AddressPage from './Screens/AddressPage';
import ProductView from './Screens/ProductView';
import PCCustomization from './Screens/PCCustomization';
import AdminDashboard from './Screens/AdminDashboard';
import AddProduct from './Screens/AddProduct';
import EditProduct from './Screens/EditProduct';
import DeleteProduct from './Screens/DeleteProduct';
import LandingPage from './Screens/LandingPage';
import AdminLogin from './Screens/AdminLogin';
import AdminRegisterPage from './Screens/AdminRegister';
import Cart from './Screens/Cart';
import './tailwind.css';
import axios from 'axios';


  const apiBaseUrl = 'https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com';

  function App() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      axios.get(`${apiBaseUrl}/endpoint`)
        .then(response => setMessage(response.data.message))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
  return (
    <>
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
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/editproduct" element={<EditProduct />} />
        <Route exact path="/deleteproduct" element={<DeleteProduct />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/adminregister" element={<AdminRegisterPage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <p>{message}</p>
    </>
  );
}

export default App;