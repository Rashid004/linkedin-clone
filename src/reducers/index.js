/** @format */

import { combineReducers } from "redux";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  userState: userReducer,
  // Add other reducers here
});

export default rootReducer;
