import { createBrowserRouter } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/RegisterPage';
import Checkout from './Screens/CheckoutPage'
import AccountDetails from './Screens/AccountDetails';
import AddressPage from './Screens/AddressPage';
import ProductView from './Screens/ProductView';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'accountdetails', element: <AccountDetails /> },
      { path: 'addresspage', element: <AddressPage /> },
      { path: 'productview', element: <ProductView /> },

    ],
  },
]);

export default router;