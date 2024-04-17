"use client";
import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementByValue: (state, action) => {
      // console.log(action);
      state.value += action.payload.value;
    },
  },
});

export const { increment, decrement, decrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
