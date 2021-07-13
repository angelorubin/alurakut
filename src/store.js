import { configureStore } from "@reduxjs/toolkit";
import dashboardSlicer from "features/dashboard/store/slice";
import userSlicer from "features/user/store/slice";

const reducer = {
	dashboard: dashboardSlicer,
	user: userSlicer,
};

export default configureStore({
	reducer,
});
