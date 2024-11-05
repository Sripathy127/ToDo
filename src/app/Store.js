import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../Slices/Todo";
import { DoneSlice } from "../Slices/Done";

const store=configureStore({
    reducer:{
        TodoInfo:TodoSlice.reducer,
        DoneInfo:DoneSlice.reducer,
    }
});
export default store;