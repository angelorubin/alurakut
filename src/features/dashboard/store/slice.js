import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "Logo" };

export const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTitle: (state, action) => void (state.title = action.payload),
  },
});

export const { addTitle } = dashboard.actions;

export default dashboard.reducer;
