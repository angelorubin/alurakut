import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "features/dashboard/store/slice";
import userSlice from "features/user/store/slice";

const reducer = {
	dashboard: dashboardSlice,
	user: userSlice,
};

export default configureStore({
	reducer,
});
