
const Hero = () => {
    return (
      <div>
        <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: "url('/front.jpg')"}}>
        <div className="absolute inset-0 opacity-50"></div>
        
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-start px-4">
        <h2 className="text-7xl font-bold text-white absolute  top-64 left-1/2 ml-32">Learn To Code</h2>
        <p className="text-2xl text-yellow-200  font-bold absolute top-80 left-1/2 ml-44 m-2">Because The World Runs On Code</p>
       <a href="/getstart"> <button className="mt-16 bg-emerald-400 hover:bg-emerald-500  transition-transform transform hover:scale-110 px-6 py-2 absolute top-1/2 left-1/2  ml-60 rounded-full text-black text-lg font-semibold w-60 shadow-lg shadow-cyan-400">
          Get Started
        </button></a>
      </div>
      </div>
      </div>
    );
  };
  
  export default Hero;
  