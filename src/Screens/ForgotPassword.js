import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post('YOUR_API_ENDPOINT/forgot-password', { email });
      
      if (response.data.success) {
        setMessage('Password reset link sent to your email.');
        setEmail('');
      } else {
        setMessage(response.data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setMessage(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        setMessage('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage('An error occurred. Please try again.');
      }
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {isLoading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>

          {message && (
            <div className={`mt-6 text-sm text-center ${
              message.includes('success') ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;