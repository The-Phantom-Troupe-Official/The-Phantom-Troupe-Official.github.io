import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from '../components/Modal';
import Google from '../Images/googleLogo.png';
import FaceBook from '../Images/facebook 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== passwordVerification) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('https://limitless-garden-98697-76e7ed60fbc8.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include',
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Registration successful');
        onClose(); // Close the modal after successful registration
        navigate('/home'); // Redirect to the homepage
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="flex justify-center items-center p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <button
            onClick={onSwitchToLogin}
            className="hover:text-blue-500 text-blue-500"
          >
            Login
          </button>
          <span> | </span>
          <span className="text-blue-500">Register</span>
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Enter your Details to Register.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="mb-4 relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={passwordVerification}
              onChange={(e) => setPasswordVerification(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-400" />
            </button>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-700">
          <p>Or Register with</p>
        </div>
        <div className="flex flex-col items-center space-y-3 mt-4">
          <div>
            <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3">
              <img src={Google} className="h-5 w-5" alt="Google logo" />
              <span>Register with Google</span>
            </button>
          </div>
          <div>
            <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3">
              <img src={FaceBook} className="h-5 w-5" alt="Facebook logo" />
              <span>Register with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterPage;
