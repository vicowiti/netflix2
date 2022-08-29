import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
