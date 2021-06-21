import { configureStore } from "@reduxjs/toolkit";
import feat01Reducer from "features/feat-01/store/reducer";
import feat02Reducer from "features/feat-02/store/reducer";

const reducer = {
  feat01: feat01Reducer,
  feat02: feat02Reducer,
};

export default configureStore({
  reducer,
});
