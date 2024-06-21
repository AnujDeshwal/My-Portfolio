import React from "react";
import Button from "../shared/Button";
import { Element } from "react-scroll";
import Experience from "../shared/Experience";
import Education from "../shared/Education";
const avatar = "https://img.freepik.com/premium-vector/illustration-web-development-programmer-coding-website_746655-2851.jpg";
const About = () => {
  
  return (
    <>
      <div id="about" className="section  w-screen p-12 ">
        <h1 className="text-[1rem] text-center text-black text-opacity-60">
          {" "}
          Get To Know More
        </h1>
        <h1 className="text-[3rem] font-bold text-center text-black ">
          About Me{" "}
        </h1>
        {/* Avatar  , experience and education  */}
        <div className=" mt-8 flex flex-col justify-center items-center lg:flex-col xl:flex-row  gap-[4rem]">
          {/* avatar  */}
          <div className=" flex justify-center items-center border-[2px] border-gray-400 sm:w-[27em]  sm:h-[20em] md:w-[37em]  md:h-[30em]  rounded-[3rem]">
            <div
              className={` border-[3px] border-white w-[15em] h-[15em] sm:w-[20em] sm:h-[20em] rounded-full md:w-[25em] md:h-[25em] `}
              style={{
                backgroundImage: `url("${avatar}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          {/* About  */}
          <div
            className=" flex  flex-col w-screen md:w-[44em] items-center
            "
          >
            
            <div className=" flex  gap-[1rem]  ">
              <Button
                style="cursor-default border-[1px] rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-gray-500 hover:scale-90 md:w-[22em] md:h-[12em] sm:w-[15em] sm:h-[10em] w-[10em] h-[11em]"
                onClick={() => console.log("helllo")}
              ><Experience/></Button>
              <Button
                
                style="cursor-default border-[1px] rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-gray-500 hover:scale-90 md:w-[22em] md:h-[12em] sm:w-[15em] sm:h-[10em] w-[10em] h-[11em]"
              ><Education/></Button>
            </div>
          <h1 className="p-8 text-center mt-4 leading-loose text-[1rem] md:text-[1.3rem] font-bold text-black text-opacity-70 ">
              Hello, My name is Anuj Deshwal , i am a full stack developer by passion and currently pursuing my btech in computer science .I have a very keen interest in software devlopment , i love to make softwares which genuinely solve some real world problem and bring smiles to someone's face.  
            </h1>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
