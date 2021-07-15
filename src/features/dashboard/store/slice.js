import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "Logo" };

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		addTitle: (state, action) => void (state.title = action.payload),
	},
});

export const { addTitle } = dashboardSlice.actions;

export default dashboardSlice.reducer;
