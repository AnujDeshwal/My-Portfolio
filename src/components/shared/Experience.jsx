import React from 'react';
import TokenIcon from '@mui/icons-material/Token';
const  Experience = () => {
return(
         <>
         <div className='flex flex-col justify-center gap-[0.5rem] items-center'>
            <TokenIcon sx={{fontSize:"2em"}}/>
            <h1 className='md:text-[1.4em] text-[0.9m] text-bold'>Experience</h1>
            <h1 className='text-[0.8em] md:text-[1em]  text-black text-opacity-60 text-bold'>2+ years
            </h1>
            <h1 className='text-[0.8em] md:text-[1em] text-black text-opacity-60 text-bold'>Full Stack Development
            </h1>
            </div>               
         </>
);
}
export default Experience;