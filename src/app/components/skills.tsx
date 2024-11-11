import Image from "next/image";
import React from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaDatabase, FaReact, FaGitAlt } from "react-icons/fa";
import { SiD3Dotjs } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaDatabase />, label: "Databases" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaReact />, label: "React.js" },
  { icon: <FaGitAlt />, label: "Git & GitHub" },
  { icon: <SiD3Dotjs />, label: "D3.js" },
];

const Skills: React.FC = () => {
  return (
    <div>
    {/* //   <h1 className="font-serif font-medium text-5xl flex items-center justify-center bg-green-300 h-32">Structure of Basic Learning</h1> */}
   
    <div className="relative flex flex-col items-center">
      <div className="text-center mb-8 ">
        <h2 className="text-3xl font-semibold absolute bottom-1/3 mb-12 mr-9">Learn</h2>
        <h1 className=" flex justify-center items-center text-4xl font-bold text-yellow-500 absolute bottom-1/3  -ml-20">Powerful Skills</h1>
      </div>

      <div className="relative w-6/12 h-screen  transition-transform transform hover:scale-105" >
        {skills.map((skill, index) => {
          const positions = [
            { top: "25%", left: "56%", transform: "translate(-50%, -50%)" },   
            { top: "37%", left: "26%", transform: "translate(-50%, -50%)" },  
            { top: "37%", right: "15%", transform: "translate(50%, -50%)" },   
            { top: "93%", left: "89%", transform: "translate(-55%, -50%)" }, 
            { bottom: "30%", left: "14%", transform: "translate(-50%, 20%)"}, 
            { bottom: "31%", right: "7%", transform: "translate(50%, 20%)" }, 
            { bottom: "6%", left: "23%", transform: "translate(-50%, 50%)" },  
            { bottom: "-15%", left: "55%", transform: "translate(-50%, 0)" },   
          ];
        
          const style = positions[index] || {};

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center bg-blue-500 text-white p-4 rounded-2xl  shadow-lg shadow-black"
              style={style}
            >
              <div className=" text-5xl mb-4 text-yellow-500 ">{skill.icon}</div>
              <p className=" font-serif font-semibold ">{skill.label}</p>
            </div>
          
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Skills;

