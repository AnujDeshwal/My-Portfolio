import React from 'react';
import {Menu as MenuIcon} from '@mui/icons-material'
import HeaderElements from '../shared/HeaderElements';
import { useDispatch } from 'react-redux';
import { setTheMobile } from '../../redux/reducers/misc.reducer';
const  Header = () => {
    const dispatch = useDispatch();
return(
         <>
         <div className='flex w-screen h-[4rem] justify-around p-8  '>
            <h1 className='text-[2em]'>Anuj Deshwal</h1>
            <div className='hidden    lg:flex  gap-[3rem] text-[1.6em]'>
            <HeaderElements/> 
            </div>
        <div className='lg:hidden' onClick={()=>{
            dispatch(setTheMobile());
        }}>
            <MenuIcon sx={{fontSize:"2.5rem" , cursor:"pointer"}}/>
        </div>
            </div>               
         </>
);
}
export default Header;