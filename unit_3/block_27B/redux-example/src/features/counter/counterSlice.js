import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //type of actions that are related to this specific feature
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
