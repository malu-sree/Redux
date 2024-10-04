import { configureStore } from "@reduxjs/toolkit";
import { default as CounterReducer}  from './counterSlice'

export const store=configureStore({
    reducer:{
        counter: CounterReducer
    },
})