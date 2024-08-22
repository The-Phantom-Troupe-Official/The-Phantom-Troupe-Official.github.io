import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`YOUR_API_ENDPOINT/verify-reset-token/${token}`);
        setIsTokenValid(response.data.isValid);
      } catch (error) {
        setMessage('Invalid or expired token. Please request a new password reset.');
        setIsTokenValid(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('YOUR_API_ENDPOINT/reset-password', {
        token,
        newPassword
      });
      
      if (response.data.success) {
        setMessage('Password reset successful. Redirecting to login...');
        setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
      } else {
        setMessage(response.data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        setMessage('No response from server. Please try again later.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isTokenValid) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Invalid Reset Link
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset Your Password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your new password below
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="mt-1">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </button>
            </div>
          </form>

          {message && (
            <div className={`mt-6 text-sm text-center ${
              message.includes('successful') ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;