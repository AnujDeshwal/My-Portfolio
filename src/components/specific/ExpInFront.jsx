import React from 'react';
import ExpElement from './ExpElement';
const  ExpInFront = () => {
return(
        <div  className='absolute top-0 '>
            <h1 className='text-[1.2em] md:text-[1.6em] py-4 text-center   text-black text-opacity-60'>Frontend Development</h1>
            <div className='flex flex-wrap text-[1.2rem] '>
                <ExpElement first="HTML" second="Experienced" />
                <ExpElement first="CSS" second="Experienced" />
                <ExpElement first="React" second="Experienced" />
                <ExpElement first="Javascript" second="Basic" />
                <ExpElement   first="Material UI"  second="Basic" />
                <ExpElement first="Tailwind" second="Intermediate" />
            </div>
        </div>
);
}
export default ExpInFront;