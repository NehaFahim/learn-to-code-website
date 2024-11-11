import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Code from "./components/learn";
import Footer from "./components/footer";
import Link from "next/link";



export default function Home() {
  return (
    <div>
    <div className="min-h-screen ">
      <Header />
        <Hero />
        <div className="px-4 py-8">
          <div className="bg-yellow-100 m-16">
            <Image src={"/webpage.avif"} alt={"webpage"} width={360} height={300}></Image> 
            <p className="absolute left-1/3 -bottom-72 ml-28 font-bold text-2xl">Make web pages and games to share with friends</p></div>

            <div className="flex mt-14 bg-yellow-100 m-16">
            <p className=" font-bold text-2xl  p-24 ml-26 ">Reveal the mysteries of the codethat runs the internet</p>
            <Image src={"/run.jpg"} alt={"webpage"} width={400} height={300} className=" absolute left-2/3 flex justify-end "></Image> 
            </div>
          
            <div className="bg-yellow-100 m-16">
            <Image src={"/chat.png"} alt={"webpage"} width={320} height={200}></Image> 
            <p className="absolute left-1/3 -bottom-full -mb-60 ml-32 font-bold text-2xl">Chat with tutors to get help</p></div>
           

    </div>
    </div>
    <div>
    <Skills></Skills>
    </div>
    <div>
  <Code/>
  </div>
  <Footer/>
  <div>
  <Link href={"/about"}></Link>
  <Link href={"/account"}></Link>
  <Link href={"/signin"}></Link>
  <Link href={"/contact-us"}></Link>
  <Link href={"/home"}></Link>
  </div>

    </div>
  );
}
