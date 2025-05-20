"use client";

import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 p-8 rounded-md shadow-sm w-80"
      >
        <h1 className="text-2xl font-serif mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-900 transition"
        >
          Sign In
        </button>
        <div className="mt-4 text-center text-sm text-gray-700">
          <a href="#" className="underline mr-2">
            Create account
          </a>
          /
          <a href="#" className="underline ml-2">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;