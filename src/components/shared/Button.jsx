import React from 'react';
const  Button = ({content="" , style="" , onClick  ,children}) => {
return(
         <>
         <button onClick={onClick} className={` ${style}  text-black flex justify-center items-center cursor-pointer border-[3px] rounded-2xl  font-bold border-black p-[1rem]`}>{content} {children} </button>             
         </>
);
}
export default Button;
