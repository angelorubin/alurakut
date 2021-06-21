import { configureStore } from "@reduxjs/toolkit";
import feat01Slicer from "features/feat-01/store/slice";

const reducer = {
  feat01: feat01Slicer,
};

export default configureStore({
  reducer,
});
