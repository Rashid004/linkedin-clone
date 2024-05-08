/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // You can add reducer functions here if needed
  },
});

// Export the reducer
export default userSlice.reducer;
