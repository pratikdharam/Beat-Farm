import React, { useState } from 'react';

const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign up

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
          <button
            type="button"
            onClick={handleToggle}
            className="text-blue-500 hover:text-blue-800"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Log In'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpLogin;
