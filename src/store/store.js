/** @format */

// /** @format */

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/index";

const store = configureStore({
  reducer: rootReducer,
});
console.log(store);

export default store;
