/** @format */

// reducers/index.js

import { combineReducers } from "redux";
import articleReducer from "./articleSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  userArticleState: articleReducer,
  userState: userSlice,
});

export default rootReducer;
