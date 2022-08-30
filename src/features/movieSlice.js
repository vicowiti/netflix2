import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { requests } from "../assets/endpoints";

const {
  requestPopular,
  requestUpcoming,
  requestHorror,
  requestTrending,
  requestTopRated,
} = requests;

// Initialize the State
const initialState = {
  movies: {
    popular: [],
  },
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/popular",
  async () => {
    const response = await axios.get(requestPopular);

    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMovies.fulfilled]: (state, { payload }) => {
      state.movies.popular = payload;
    },
    [fetchPopularMovies.pending]: (state) => {
      console.log("Pending");
    },
    [fetchPopularMovies.rejected]: (state, { payload }) => {
      console.log("Rejected", payload);
    },
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;

//Selector Functions

export const selectPopularMovies = (state) => state.movies.movies.popular;
