import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
const  Education = () => {
return(
         <>
          <div className='flex flex-col justify-center gap-[0.5rem] items-center'>
            <SchoolIcon sx={{fontSize:"2rem"}}/>
            <h1 className='md:text-[1.4em] text-[0.9m] text-bold'>Education</h1>
            <h1 className='text-[0.8em] md:text-[1em]  text-black text-opacity-60 text-bold'>Bachelor of technology
            </h1>
            <h1 className='text-[0.8em] md:text-[1em] text-black text-opacity-60 text-bold'>Computer Science
            </h1>
            </div>                 
         </>
);
}
export default Education;