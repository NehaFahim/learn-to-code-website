import Image from 'next/image'
import React from 'react'

const Code = () => {
  return (
    <div className='min-h-screen mt-44 '>
        <div>
        <div className="relative  bg-contain bg-no-repeat bg-fixed h-screen" style={{backgroundImage: "url('/person.jpg')"}}>
        <div className='m-6 pt-40 text-white'>
        <h1 className='text-4xl font-serif font-semibol mt-28 text-yellow-300'>From Basics to Beyond: <br /> Let’s Learn to Code Together</h1>
        <p className='flex items-start justify-start pt-6'>Welcome to a journey where we break down the world of coding, <br /> step by step! Whether you’re just starting out or looking to <br /> advance your skills, we’re here to guide you through every stage. <br /> Our tutorials, resources, and community support are designed to <br /> make coding accessible and engaging for everyone. Together, <br /> we’ll tackle foundational concepts, explore best practices, and <br /> dive into real-world projects that bring your ideas to life.</p>
        </div>
         
        </div>
        </div>
    </div>
  )
}

export default Code;