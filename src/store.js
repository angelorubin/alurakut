import { configureStore } from "@reduxjs/toolkit";
import dashboardSlicer from "features/dashboard/store/slice";
import messagesSlicer from "features/messages/store/slice";

const reducer = {
  dashboard: dashboardSlicer,
  messages: messagesSlicer,
};

export default configureStore({
  reducer,
});
