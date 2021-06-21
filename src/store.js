import { configureStore } from "@reduxjs/toolkit";
import feat01Slicer from "features/feat-01/store/slice";
import feat02Slicer from "features/feat-02/store/slice";

const reducers = {
  feat01: feat01Slicer,
  feat02: feat02Slicer,
};

export default configureStore({
  reducer: reducers,
});
