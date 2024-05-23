/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticles: (state, action) => {
      state.articles = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { getArticles, setLoadingStatus } = articleSlice.actions;

export default articleSlice.reducer;
