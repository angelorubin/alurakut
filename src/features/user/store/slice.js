import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ user: [], messages: [{ id: 1, message: "message 01" }] },
];

const fetchUserById = createAsyncThunk(
	"users/fetchByIdStatus",
	async (userId, thunkAPI) => {
		// const response = await userAPI.fetchById(userId);
		const resp = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((resp) => resp.json())
			.then((user) => user);
		return resp;
	}
);

export const user = createSlice({
	name: "messages",
	initialState,
	reducers: {
		getMessages: (state) => state.messages,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserById.fulfilled, (state, action) => {
			// Add data to the state array
			// state.users.push(action.payload);
			return action;
		});
	},
});

export const { getMessages } = user.actions;

export default user.reducer;
