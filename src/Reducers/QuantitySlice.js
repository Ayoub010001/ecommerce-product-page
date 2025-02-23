import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:0,
    isAddedToCart:false
};

const quantitySlice = createSlice({
    name:"quantity",
    initialState,
    reducers:{
        increment:(state, action)=>{
            state.value += 1;
        },
        decrement:(state, action)=>{
            if(state.value > 0)
                state.value -= 1
        },
        reset:(state, action)=>{
            state.value = 0;
            state.isAddedToCart = false;
        },
        addToCart:(state, action)=>{
            state.isAddedToCart = true;
        }
    }
})

export default quantitySlice.reducer;
export const {increment, decrement, addToCart, reset} = quantitySlice.actions;