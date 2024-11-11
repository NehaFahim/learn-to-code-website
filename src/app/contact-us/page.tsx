// pages/contact.tsx
"use client";
import { useState } from 'react';
import Header from '../components/header';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add API call or success message here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div>
      <Header/>
    <div className="flex justify-center items-center min-h-screen  px-4 bg-center bg-cover" style={{backgroundImage: "url('/tele.avif')"}}>
      <div className="w-full max-w-2xl  p-4   absolute right-52 mt-7">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Feel free to reach out to us with any questions or feedback!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
