import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isMobile :false
}

const miscSlice = createSlice({
    name:"misc",
    initialState , 
    reducers:{
        setTheMobile:(state , action)=>{
            state.isMobile = true
        },
        unsetMobile:(state,action)=>{
            state.isMobile=false
        }
    }
})
export default miscSlice;
export const {setTheMobile , unsetMobile} = miscSlice.actions;