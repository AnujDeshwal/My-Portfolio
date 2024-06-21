import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "./reducers/misc.reducer";
const store = configureStore({
    reducer:{
        [miscSlice.name]:miscSlice.reducer
    }
})
export default store ;