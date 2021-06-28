import { configureStore } from "@reduxjs/toolkit";
import dashboardSlicer from "features/dashboard/store/slice";

const reducer = {
  dashboard: dashboardSlicer,
};

export default configureStore({
  reducer,
});
