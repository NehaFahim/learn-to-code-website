import React from 'react'
import Header from "../components/header";
import Image from 'next/image';

const Signin = () => {
  return (
    <div>
      <Header/>
      
      <Image src={"/tech.jpg"} alt={"tech"} width={"1500"} height={"900"}></Image>
      <div className="flex justify-center h-80 w-5/12 m-80 absolute top-20 right-7  ">
        <div className="w-full l max-w-3xl p-4  rounded shadow-md ">
          <h1 className="text-4xl font-bold mb-4 flex justify-center text-white">Login</h1>
          <form>
            <label className="block mb-2">
              <span className="text-lime-400 text-2xl">Email</span>
              <input
                type="email"
                className="block w-full p-2 pl-10 text-sm text-gray-700 border-2 border-blue-400"
                placeholder="example@example.com"
              />
            </label>
            <label className="block mb-2">
              <span className="text-lime-400 text-2xl">Password</span>
              <input
                type="password"
                className="block w-full p-2 pl-10 text-sm text-gray-700 border-2 border-blue-400"
                placeholder="********"
              />
            </label>
            <button
              type="submit"
              className="bg-sky-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <p className="text-lg text-white mt-4 font-medium">
            Don't have an account? <a href="/signin" className=" font-bold text-orange-500 hover:text-orange-700">Log In</a>
          </p>
        </div>
      </div>

</div>

  )
}

export default Signin;