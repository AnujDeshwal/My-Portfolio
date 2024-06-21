import React from 'react';
import Button from '../shared/Button';
import ExpInFront from '../specific/ExpInFront';
import ExpInBack from '../specific/ExpInBack';
const  ExploreExperience = () => {
return(
    <div id="experience" className="    w-screen p-12 ">
    <h1 className="text-[1rem] text-center text-black text-opacity-60">
      {" "}
     Explore My
    </h1>
    <h1 className="text-[3rem] font-bold text-center text-black ">
     Experience{" "}
    </h1>
    <div className=" flex flex-wrap sm:flex-col md:flex-row  justify-center py-12  items-center gap-[1rem]  ">
              <Button
                style=" relative cursor-default border-[2px] border-gray-300 rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-gray-500 hover:scale-90 xl:w-[37em] xl:h-[26em] md:w-[30em] md:h-[50em] sm:w-[30em] sm:h-[24em] w-[22em] h-[40em]"
                onClick={() => console.log("helllo")}
              ><ExpInFront/></Button>
              <Button
                
                style="relative cursor-default border-[2px] border-gray-300 rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-gray-500 hover:scale-90 xl:w-[37em] xl:h-[26em] md:w-[30em] md:h-[50em] sm:w-[30em] sm:h-[24em] w-[22em] h-[40em]"
              ><ExpInBack/></Button>
            </div>
    </div>
);
}
export default ExploreExperience;