import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Todo:[],
    Id:0
};

export const TodoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        setTodo:(state,action)=>{
            state.Todo=[...state.Todo,action.payload];
            state.Id=state.Id+1;
        },
        setCheck:(state,action)=>{
            state.Todo=action.payload;
        },
        // fetchId:(state,action)=>{
        //     return Id;
        // }
    }
});

export const {setTodo,setCheck}=TodoSlice.actions;
export default TodoSlice.reducer;