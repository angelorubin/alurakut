import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "React Redux" };

export const feat02 = createSlice({
  name: "feat02",
  initialState,
  reducers: {
    addTitle: (state, action) => void (state.title = action.payload),
  },
});

export const { addTitle } = feat02.actions;

export default feat02.reducer;
