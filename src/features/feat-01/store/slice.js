import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "React Redux" };

export const feat01 = createSlice({
  name: "feat01",
  initialState,
  reducers: {
    addTitle: (state, action) => void (state.title = action.payload),
  },
});

export const { addTitle } = feat01.actions;

export default feat01.reducer;
