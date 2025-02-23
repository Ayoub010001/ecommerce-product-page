import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "../Reducers/QuantitySlice";

export const store = configureStore({
    reducer:{
        quantity:quantityReducer
    }
})