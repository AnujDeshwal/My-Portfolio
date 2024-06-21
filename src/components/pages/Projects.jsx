import React from "react";
import ProjectElem from "../specific/ProjectElem";
const Projects = () => {
  return (
    <div id="projects" className="    w-screen p-12 ">
      <h1 className="text-[1rem] text-center text-black text-opacity-60">
        {" "}
        Browse My Recent
      </h1>
      <h1 className="text-[3rem] font-bold text-center text-black ">
        Projects{" "}
      </h1>
      <div className="flex flex-wrap justify-around items-start mt-8 gap-y-12">
        <ProjectElem name="Ecommerce webapp" avatar="https://res.cloudinary.com/dspsqrnei/image/upload/v1718981940/hello_hhjrz5.png" gitLink="https://github.com/AnujDeshwal/React-Ecommerce-Full-Stack-Webapp" liveLink="https://react-ecommerce-full-stack-webapp.onrender.com"/>
        <ProjectElem name="NamasteTalk chatpp" avatar="https://res.cloudinary.com/dspsqrnei/image/upload/v1718983264/helo1_a1y4lk.png" gitLink="https://github.com/AnujDeshwal/NamasateTalk-Frontend" liveLink="https://namasate-talk-frontend.vercel.app/"/>
      </div>
    </div>
  );
};
export default Projects;
