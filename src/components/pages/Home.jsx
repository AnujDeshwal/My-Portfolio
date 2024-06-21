import React from "react";
import Button from "../shared/Button";
const avatar =
  "https://img.freepik.com/premium-vector/illustration-web-development-programmer-coding-website_746655-2865.jpg";
const Home = () => {
  return (
    <>
      <div
        id="home"
        className=" px-8 w-screen h-[calc(100vh-4rem)] flex flex-col gap-[1em] md:gap-[4rem] md:flex-row justify-center  items-center "
      >
        {/* Avatar  */}
        <div
          className={`  border-[3px] border-white w-[15em] h-[15em] rounded-full md:w-[27em] md:h-[27em] `}
          style={{
            backgroundImage: `url("${avatar}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* About  */}
        <div
          className=" flex flex-col w-screen md:w-[20em] justify-center items-center
            "
        >
          <h1 className=" text-center text-[1.7rem] font-bold text-black text-opacity-50 ">
            Hello, I'm
          </h1>
          <h1 className="text-center text-[3rem] font-bold text-opacity-50 ">
            Anuj Deshwal
          </h1>
          <h1 className=" text-center text-[2rem] text-black font-bold text-opacity-70 ">
            Full Stack Developer
          </h1>
          <div className="mt-4 flex  gap-[1rem]  ">
            <a href="assets/My Resume (1).pdf" download="My Resume (1).pdf"> <Button
              style=" transition-all ease-in-out duration-1000 hover:text-white hover:bg-[#343434] hover:scale-90"
              content="My Resume"
            ></Button></a>
           
            <a href="#contact">
              <Button
                content="Contact Info"
                style=" active:scale-75 text-white hover:bg-black transition-all duration-500 bg-gray-600"
              ></Button>
            </a>
          </div>
          <div className="mt-4 flex gap-[1.5rem] justify-center items-center">
            <a href="https://www.linkedin.com/in/anuj-deshwal-899358215" target="_blank" rel="noopener noreferrer">
              <button
                className="h-[3em] w-[3em] rounded-full"
                style={{
                  backgroundImage: `url("https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
            </a>
            <a href="https://github.com/AnujDeshwal" target="_blank" rel="noopener noreferrer">
              <button
                className="h-[3em] w-[3em] rounded-full"
                style={{
                  backgroundImage: `url("https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
