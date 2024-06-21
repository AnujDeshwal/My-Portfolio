import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeaderElements from "../shared/HeaderElements";
const Contact = ({ email = "" }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  const date = new Date();
  const currentYear= date.getFullYear();
  return (
    <div id="contact" className="   flex flex-col justify-center items-center  w-screen p-20 ">
      <h1 className="text-[1rem] text-center text-black text-opacity-60">
        {" "}
        Get in Touch
      </h1>
      <h1 className="text-[3rem] font-bold text-center mb-12 text-black ">
        Contact Me{" "}
      </h1>
      <div
        className=" md:m-auto  flex   justify-center    items-center border-[2px] border-gray-300 mt-16 rounded-[2em] p-4  hover:bg-gray-200 transition-all duration-300 ease-in-out w-[20rem]
        md:w-[32rem] "
        
      >
        <MailOutlineIcon sx={{fontSize:"2.5rem"}}/>
        <div onClick={handleEmailClick} className=" text-[1.2rem] group overflow-hidden h-[4rem] flex flex-col justify-center items-center w-[18rem]  md:w-[20rem] hover:text-gray-600   transition-all ease-in-out duration-1000 cursor-pointer text-center md:text-[1.5rem] text-black"><h1>{email}</h1>
        <div className="group-hover:translate-x-[0] transition-all ease-in-out duration-1000   h-[0.2rem] w-[20rem] border-[0.1rem] border-gray-600 translate-x-[-20rem] group"></div>
        </div>


      </div>
      <div className=" mt-[10rem] text-[1.4rem] flex flex-wrap gap-[4rem] justify-center items-center min-h-[10rem]">  <HeaderElements/></div>
     
      <h1 className="mt-12 md:mt-0 text-center text-[1rem] text-gray-500">Copyright © {currentYear} Anuj Deshwal. All Rights Reserved.</h1>
    </div>
  );
};  
export default Contact;
