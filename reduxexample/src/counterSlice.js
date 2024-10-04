import { combineSlices, createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
}

export const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
       incCount:(state)=>{
        state.count=state.count+1

       },
       decCount:(state)=>{
        state.count=state.count-1
       },

    }
})

export const {incCount,decCount}=CounterSlice.actions

export default CounterSlice.reducer