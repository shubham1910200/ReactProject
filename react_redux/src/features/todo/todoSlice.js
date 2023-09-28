import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo:[{id:1,text:'Hello world'}]
}

function sayHello()
{
    console.log('Hello world');
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo :()=>{},
        removeTodo :()=>{},
    }
})