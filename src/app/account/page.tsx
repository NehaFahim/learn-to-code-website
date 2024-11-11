"use client";

import React, { useState } from 'react';
import Header from '../components/header';

const Account: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Account created:', { username, email, password });
  };

  return (
    <div>
      <Header/>

    
    <div className="flex items-center justify-center min-h-screen bg-cover " style={{backgroundImage: "url('/page.jpg')"}}>
     
 <div className="w-full max-w-lg p-6 bg-blue-950 rounded-md  absolute  right-20 border border-lime-300 border-solid shadow-xl shadow-sky-400 mb-12 ">
     
        <h2 className="text-2xl font-semibold text-center text-amber-300">Create an Account</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-blue-500 font-normal text-2xl">Username</label>
            <input
              type="text"
              value={username}
               placeholder="enter your name"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-orange-400 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-500 font-normal text-2xl">Email</label>
            <input
              type="email"
              value={email}
               placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-orange-400 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-500 font-normal text-2xl">Password</label>
            <input
              type="password"
              value={password}
               placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-orange-400 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 "
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Account;



