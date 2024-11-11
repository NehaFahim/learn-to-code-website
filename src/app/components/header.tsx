import Image from 'next/image';


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-300 border border-black">
      <h1 className="text-white font-bold text-lg"><Image src={"/logoo.png"} alt={"logo"} width={40} height={30}></Image></h1>
      <nav className="space-x-9">
        <a className=' text-black text-lg font-medium hover:text-blue-700' href="/home">Home</a>
        <a className=' text-black text-lg font-medium hover:text-blue-700' href="/about">About</a>
        <a className=' text-black text-lg font-medium hover:text-blue-700' href="/signin">Signin</a>
        <a href="/account"><button className="bg-yellow-300 hover:bg-yellow-400 font-medium px-4 py-2 text-black rounded">Create an Account</button></a>

      </nav>
    </header>
  );
};

export default Header;
