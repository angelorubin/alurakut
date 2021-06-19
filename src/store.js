import { configureStore } from "@reduxjs/toolkit";

const initialState = [{ id: 1, username: "angelo" }];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TYPE_1":
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default configureStore({
  reducer: { users: usersReducer },
});
