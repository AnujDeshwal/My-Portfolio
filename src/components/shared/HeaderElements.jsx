import React from "react";
import { useDispatch } from "react-redux";
import { unsetMobile } from "../../redux/reducers/misc.reducer";

const HeaderElements = () => {
  const dispatch = useDispatch();
  return (
    <>

    <div onClick={e=>dispatch(unsetMobile())} className="active:scale-50 text-[1.2rem] group overflow-hidden h-[2.5rem] flex flex-col justify-center items-center min-w-[8rem] hover:text-gray-400   transition-all ease-in-out duration-1000 cursor-pointer text-center md:text-[1.5rem] text-black"><a  href="#about"><h1>About</h1></a>
        <div className="group-hover:translate-x-[0] transition-all ease-in-out duration-1000   h-[0.2rem] min-w-[5rem] border-[0.1rem] border-gray-400 translate-x-[-20rem] group"></div>
        </div>
    <div onClick={e=>dispatch(unsetMobile())} className="active:scale-50 text-[1.2rem] group overflow-hidden h-[2.5rem] flex flex-col justify-center items-center min-w-[5rem] hover:text-gray-400   transition-all ease-in-out duration-1000 cursor-pointer text-center md:text-[1.5rem] text-black"><a href="#experience"><h1>Experience</h1></a>
        <div className="group-hover:translate-x-[0] transition-all ease-in-out duration-1000   h-[0.2rem] min-w-[8rem] border-[0.1rem] border-gray-400 translate-x-[-20rem] group"></div>
        </div>
    <div onClick={e=>dispatch(unsetMobile())} className="active:scale-50 text-[1.2rem] group overflow-hidden h-[2.5rem] flex flex-col justify-center items-center min-w-[5rem] hover:text-gray-400   transition-all ease-in-out duration-1000 cursor-pointer text-center md:text-[1.5rem] text-black"><a href="#projects"><h1>Projects</h1></a>
        <div className="group-hover:translate-x-[0] transition-all ease-in-out duration-1000   h-[0.2rem] min-w-[8rem] border-[0.1rem] border-gray-400 translate-x-[-20rem] group"></div>
        </div>
    <div onClick={e=>dispatch(unsetMobile())} className="active:scale-50 text-[1.2rem] group overflow-hidden h-[2.5rem] flex flex-col justify-center items-center min-w-[5rem] hover:text-gray-400   transition-all ease-in-out duration-1000 cursor-pointer text-center md:text-[1.5rem] text-black"><a href="#contact"><h1>Contact</h1></a>
        <div className="group-hover:translate-x-[0] transition-all ease-in-out duration-1000   h-[0.2rem] min-w-[8rem] border-[0.1rem] border-gray-400 translate-x-[-20rem] group"></div>
        </div>
   
    </>
  );
};
export default HeaderElements;
