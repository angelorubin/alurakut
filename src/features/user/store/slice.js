import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "shared/utils/api";

const initialState = [
	{
		user: [],
		messages: [
			{ id: 1, message: "message 01" },
			{ id: 2, message: "message 02" },
		],
	},
];

export const fetchUserById = createAsyncThunk(
	"users/fetchUserById",
	async (userId, thunkApi) => {
		const user = await http(`users/${userId}`).then((user) => user);
		return user;
	}
);

export const userSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		getMessages: (state, action) => state.messages,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserById.fulfilled, (state) => {
			return state;
		});
	},
});

export const { getMessages } = userSlice.actions;

export default userSlice.reducer;
