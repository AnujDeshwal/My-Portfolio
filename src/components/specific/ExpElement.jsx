import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
const ExpElement = ({first="" , second="" , style="" , disable="false"}) => {
  return (
    <div className={`flex gap-2 md:gap-4 ${style} m-auto sm:m-auto xl:justify-normal xl:items-start  md:h-[7rem] md:w-[17rem] h-[5em] w-[11em] md:px-8 px-8`}>
        <div style={{display:`${disable==="true"?"none":"block   "}`}}> <VerifiedIcon  /></div>
     
      <div className="flex flex-col text-left text-[0.8em] md:text-[1.2em] ">
        <h1 >{first}</h1>
        <h1 className="text-black text-opacity-60">{second}</h1>
      </div>
    </div>
  );
};
export default ExpElement;
