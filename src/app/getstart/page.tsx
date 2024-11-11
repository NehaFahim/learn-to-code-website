import React from 'react';
import Header from '../components/header';

const StartPage: React.FC = () => {
  return (
    <div>
      <Header/>
        <div className="relative bg-center bg-cover h-screen"style={{backgroundImage: "url('/tri.avif')"}}>
        </div>
   
    <div className=" absolute top-24 translate-x-2 translate-y-0 container mx-auto p-2 min-h-screen">

      <section className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-yellow-300 ">Welcome to Learn to Code!</h2>
      </section>

      <section className="mb-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Choose Your Path</h3>
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 border rounded-full bg-blue-500 text-white font-medium shadow-lg transition-transform duration-200 hover:bg-blue-600 hover:-translate-y-1">
            Beginner
          </button>
          <button className="px-6 py-3 border rounded-full bg-green-500 text-white font-medium shadow-lg transition-transform duration-200 hover:bg-green-600 hover:-translate-y-1">
            Intermediate
          </button>
          <button className="px-6 py-3 border rounded-full bg-purple-500 text-white font-medium shadow-lg transition-transform duration-200 hover:bg-purple-600 hover:-translate-y-1">
            Advanced
          </button>
        </div>
      </section>

  
      <section className="mb-10">
        <h3 className="text-3xl font-bold font-serif text-blue-900 mb-0 text-center">Popular Topics</h3>
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">HTML Basics</span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">CSS Fundamentals</span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">JavaScript Essentials</span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">Typescript Introduction</span>
            </li>
            <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">Node.js Basics </span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">React Basics</span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">Database Basics </span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">Responsive Web Design  </span>
          </li>
          <li className="p-6 border rounded-lg shadow-md text-center bg-amber-50 transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 shadow-amber-200">
            <span className="text-lg font-medium text-gray-800">Debugging Techniques </span>
          </li>
        
        </ul>
      </section>

      <section className="text-center bg-sky-200 m-7 p-8 ">
        <p className="text-lg text-gray-700">
          Ready to dive in? Pick a topic above or{" "}
          <a href="#" className="text-blue-500 hover:underline font-medium">
            join our community
          </a>{" "}
          to start your coding journey!
        </p>
      </section>
    </div>
    </div>
  );
};

export default StartPage;
