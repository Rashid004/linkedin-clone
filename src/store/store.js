/** @format */

// /** @format */

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/index";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
console.log(store);

export default store;
