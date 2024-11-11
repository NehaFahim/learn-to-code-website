import Image from 'next/image'
import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram,FaFacebook,FaTwitter , } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-700 w-full h-40'>
        <div className='p-8 ml-16 '>
        <Image src={"/logoo.png"} alt={"logo"} width={80} height={80}></Image>
      <div className='flex items-center justify-center gap-x-20 absolute transform translate-x-72 -translate-y-16 text-lg font-bold '>
       <a className=' hover:text-teal-400' href="/about">About</a>
       <a className=' hover:text-teal-400' href="/help">Help</a>
       <a className=' hover:text-teal-400' href="/contact-us">Contact Us</a>
       <a className=' hover:text-teal-400' href="/social">Social</a>
      
        <div className=" flex space-x-5  ">
        <a href="https://github.com/" target="_blank"  className='hover:text-violet-500'>
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://linkedin.com/" target="_blank" className='hover:text-blue-600'>
          <FaLinkedin className="text-4xl" />
        </a>
        
        <a href="https://instagram.com/" target="_blank"   className='hover:text-red-500'>
          <FaInstagram className="text-4xl" />
        </a>
        <a href="https://facebook.com/" target="_blank"   className='hover:text-blue-700'>
          <FaFacebook className="text-4xl" />
          </a>
          <a href="https://twitter.com/" target="_blank"   className='hover:text-blue-500'>
          <FaTwitter className="text-4xl" />
          </a>

      </div>
      </div>
        </div>
    </div>
  )
}

export default Footer