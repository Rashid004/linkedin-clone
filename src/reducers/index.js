/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
