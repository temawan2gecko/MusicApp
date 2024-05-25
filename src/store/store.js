import { configureStore } from "@reduxjs/toolkit";
import controlsSlice from "./slices/controllsSlice";

const store = configureStore({
  reducer: {
    controls: controlsSlice,
  },
});

export default store;
