import React from 'react';
import ExpElement from './ExpElement';
const  ExpInBack = () => {
return(
    <div className=' absolute top-0'>
    <h1 className='text-[1.2em] md:text-[1.6em] py-4 text-center     text-black text-opacity-60'>Backend Development</h1>
    <div className='flex flex-wrap text-[1.2rem]'>
        <ExpElement first="Node JS" second="Intermediate" />
        <ExpElement first="SQL" second="Intermediate" />
        <ExpElement first="Mongo DB" second="Intermediate" />
        <ExpElement first="Git" second="Basic" />
        <ExpElement first="Express JS" second="Intermediate" />
        <ExpElement disable="true"/>
    </div>
</div>
);
}
export default ExpInBack;