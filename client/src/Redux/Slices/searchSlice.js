import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"Search",
    initialState:[],
    reducers:{ 
        UpdateSearch:(state , action)=>{
            state.pop();
            state.push(action.payload);
        }
    }
});
export const { UpdateSearch } = searchSlice.actions;

export default searchSlice.reducer;