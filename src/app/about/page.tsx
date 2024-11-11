import React from 'react'

const About = () => {
  return (
   <div> 
        <div className="relative bg-center bg-cover h-screen "style={{backgroundImage: "url('/about.avif')"}}>
        </div>
        <a href="/"> <button className="mt-16 bg-cyan-300 hover:bg-cyan-500  transition-transform transform hover:scale-110 px-6 py-2 absolute top-1/2 left-96  ml-60 rounded-full text-black text-lg font-semibold w-60 shadow-lg shadow-cyan-400">
         ⬅ back to page
        </button></a>
        <h1 className='absolute top-24 left-16 font-semibold font-serif text-6xl text-white '>ABOUT US</h1>
        <div className='absolute top-80'>
           
        <h1 className='text-4xl font-serif font-semibol  text-yellow-300 m-3'>Empowering Your Coding Journey</h1>
        <p className='flex items-start justify-start text-white m-3'>Welcome to Learn to Code! We are committed to empowering <br /> individuals by providing the skills and knowledge to succeed in <br /> coding and programming. Our mission is to make coding accessible <br /> and enjoyable for everyone, whether you're a beginner or looking <br /> to enhance your skills..</p>
        </div>
        <div className='absolute top-32 left-1/2 ml-48 '>
        <h1 className='text-4xl font-serif font-semibol  text-yellow-300  ml-5'>Hands-On Learning and Expert Guidance</h1>
        <p className='flex items-start justify-start text-white m-2'>At Learn to Code, we focus on hands-on learning through real-world projects, expert-guided tutorials, and a supportive community. From web development and data science to app development, our resources and structured guidance will help you reach your goals and expand your potential.</p>
        </div>
        
    <section className="relative bg-center bg-cover h-screen "style={{backgroundImage: "url('/chattech.avif')"}}>
      <div className="max-w-6xl mx-auto px-8  lg:px-8 p-10 ">
        <div className="bg-opacity-65  bg-black rounded-lg p-8 ">
          <h2 className="text-3xl font-bold text-center text-sky-400 mb-6">
            About Learn to Code
          </h2>

          <div className="space-y-6">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-lime-300">Our Mission</h3>
              <p className="text-white">
                To make coding accessible, enjoyable, and achievable for everyone.
              </p>
            </div>

            <div className="p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-lime-300">Who We Are</h3>
              <p className="text-white">
                A dedicated team of educators and developers passionate about helping you learn to code.
              </p>
            </div>

            <div className="p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-lime-300">What We Offer</h3>
              <ul className="list-disc pl-5 text-white">
                <li>Hands-on Learning: Real-world projects that bring theory to life.</li>
                <li>Guided Tutorials: Step-by-step guidance from experts in coding.</li>
                <li>Supportive Community: A place to connect, share, and learn with others.</li>
              </ul>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-lime-300">Join Us Today</h3>
              <p className="text-white">
                Start your coding journey with Learn to Code and open the door to endless possibilities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;

        </div>
  )
}

export default About