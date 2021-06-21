import { configureStore } from "@reduxjs/toolkit";
import feat01Reducer from "features/feat-01/store/reducer";

const reducer = {
  feat01: feat01Reducer,
};

export default configureStore({
  reducer,
});
