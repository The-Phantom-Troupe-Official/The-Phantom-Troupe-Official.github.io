import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Google from '../Images/googleLogo.png';
import FaceBook from '../Images/facebook 1.png';
import RegisterPage from './RegisterPage';

const Login = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the token in the URL after Google/Facebook login
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('authToken', token); // Store token in localStorage
      navigate('/home'); // Redirect to homepage
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    window.location.href = 'https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/auth/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/auth/facebook';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          localStorage.setItem('authToken', result.token); // Store token in localStorage
          navigate('/homepage');
        } else {
          setError(result.message || 'Unable to Login');
        }
      } else {
        const error = await response.json();
        setError(error.message || 'Unable to Login');
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setIsLoginModalOpen(true)}
      >
        Shop Now
      </button>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        className="flex justify-center items-center p-4 md:p-6"
      >
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className='text-blue-500'>Login | </span>
            <button
              onClick={() => {
                setIsLoginModalOpen(false);
                setIsRegisterModalOpen(true);
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              Register
            </button>
          </h2>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Enter your email and password to login.
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <NavLink className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/forgotpassword'>
                Forgot Password?
              </NavLink>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-gray-700">
            <span>Or login with</span>
          </div>
          <div className="flex flex-col items-center space-y-3 mt-4">
            <button 
            onClick={handleGoogleLogin}
            className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 w-full md:w-64 flex items-center justify-center space-x-3">
              <img src={Google} className='h-5 w-5' alt="Google logo" />
              <span>Login With Google</span>
            </button>
            <button 
            onClick={handleFacebookLogin}
            className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 w-full md:w-64 flex items-center justify-center space-x-3">
              <img src={FaceBook} className='h-5 w-5' alt="Facebook logo" />
              <span>Login With Facebook</span>
            </button>
          </div>
        </div>
      </Modal>

      <RegisterPage
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </div>
  );
};

export default Login;
