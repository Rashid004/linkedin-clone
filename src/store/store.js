/** @format */

// /** @format */

import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";

import rootReducer from "../reducers/index";

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(yourCustomMiddleware),
});
console.log(store);

export default store;
