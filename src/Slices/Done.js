import { createSlice } from "@reduxjs/toolkit";

const initialState={
Done:[]
};

export const DoneSlice=createSlice({
name:"Done",
initialState,
reducers:{
    setDone:(state,action)=>{
        state.Done=[...state.Done,...action.payload];
    }
}

});

export const {setDone}=DoneSlice.actions;
export default DoneSlice.reducer;