import React from 'react';
import Button from '../shared/Button';
import { Link } from '@mui/material';

const  ProjectElem = ({name ="" , avatar="" , gitLink="" , liveLink=""}) => {
return(
         <div className='border-[2px] border-gray-300 rounded-[2em]  w-[90%] h-[28em] sm:w-[27em] sm:h-[34em]'>
        <div className=' h-[70%] w-full  p-8'>
            <div className='border-[2px] border-gray-300 rounded-2xl h-full w-full'  style={{backgroundImage:`url(${avatar})` , backgroundSize:"cover" , backgroundPosition:"center"}}></div>
        </div>
        <h1 className='text-[2rem] text-center font-bold'>{name}</h1>
        <div className=' flex justify-around sm:justify-between items-center py-4 px-[0.3rem] sm:px-12'>
            <Link target="_blank" rel="noopener noreferrer" underline='none' href={`${gitLink!==""?gitLink:"#"}`}><Button style=" cursor-default border-[2px] rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-black hover:scale-90 w-[7em] h-[3em] sm:w-[10em] sm:h-[4em] " content={"Github"}/></Link>
            
            <Link target="_blank" rel="noopener noreferrer" underline="none" href={`${liveLink!==""?liveLink:"#"}`}><Button style="  cursor-default border-[2px] rounded-[2rem] transition-all ease-in-out duration-1000 hover:text-white hover:bg-black hover:scale-90 w-[7em] h-[3em] sm:w-[10em] sm:h-[4em] " content={"Live Demo"}/></Link>
        </div>
         </div>
);
}
export default ProjectElem;