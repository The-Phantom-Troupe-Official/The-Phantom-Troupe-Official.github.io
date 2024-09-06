import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';
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
    <HashRouter>
      <HandleRedirect /> 

      <Route>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/accountdetails" component={AccountDetails} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/addresspage" component={AddressPage} />
        <Route path="/productview" component={ProductView} />
        <Route path="/login" component={Login} />
        <Route path="/pccustomize" component={PCCustomization} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword/:token" component={ResetPassword} />
        <Route component={LandingPage} />
      </Route>
      <p>{message}</p>
    </HashRouter>
  );
}

export default App;
