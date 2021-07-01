import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    message: "Lorem ipsum dolor simet 1 ...",
  },
  {
    id: 2,
    message: "Lorem ipsum dolor simet 2 ...",
  },
];

export const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {
    getMessages: (state) => state.messages,
  },
});

export const { getMessages } = messages.actions;

export default messages.reducer;
