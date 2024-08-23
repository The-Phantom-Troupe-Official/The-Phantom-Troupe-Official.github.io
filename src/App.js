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
import AddProduct from './Screens/AddProduct';
import EditProduct from './Screens/EditProduct';
import DeleteProduct from './Screens/DeleteProduct';
import LandingPage from './Screens/LandingPage';
import AdminLogin from './Screens/AdminLogin';
import AdminRegisterPage from './Screens/AdminRegister';
import AdminDashboard from './Screens/AdminDashboard';
import ForgotPassword from './Screens/ForgotPassword';
import Cart from './Screens/Cart';
import './tailwind.css';
import axios from 'axios';
import ResetPassword from './Screens/ResetPassword';

  const apiBaseUrl = 'https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com';

  function App() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      axios.get(`${apiBaseUrl}/`)
        .then(response => setMessage(response.data.message))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
  return (
    <>
      <Routes>
        <Route exact path="https://www.yakcomputers.tech/" element={<LandingPage />} />
        <Route path="https://www.yakcomputers.tech/home" element={<Home />} />
        <Route path="https://www.yakcomputers.tech/register" element={<Register />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="https://www.yakcomputers.tech/checkout" element={<Checkout />} />
        <Route path="https://www.yakcomputers.tech/addresspage" element={<AddressPage />} />
        <Route path="https://www.yakcomputers.tech/productview" element={<ProductView />} />
        <Route path="https://www.yakcomputers.tech/login" element={<Login />} />
        <Route path="https://www.yakcomputers.tech/pccustomize" element={<PCCustomization />} />
        <Route exact path="https://www.yakcomputers.tech/admin" element={<AdminRegisterPage />} />
        <Route exact path="https://www.yakcomputers.tech/addproduct" element={<AddProduct />} />
        <Route exact path="https://www.yakcomputers.tech/editproduct" element={<EditProduct />} />
        <Route exact path="https://www.yakcomputers.tech/deleteproduct" element={<DeleteProduct />} />
        <Route exact path="https://www.yakcomputers.tech/adminlogin" element={<AdminLogin />} />
        <Route exact path="https://www.yakcomputers.tech/adminRegister" element={<AdminRegisterPage />} />
        <Route exact path="https://www.yakcomputers.tech/cart" element={<Cart />} />
        <Route exact path="https://www.yakcomputers.tech/register/admindasboard" element={<AdminDashboard />} />
        <Route exact path="https://www.yakcomputers.tech/login/admindashboard" element={<Cart />} />
        <Route exact path="https://www.yakcomputers.tech/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="https://www.yakcomputers.tech/resetpassword/:token" element={<ResetPassword />} />  

      </Routes>
      <p>{message}</p>
    </>
  );
}

export default App;
