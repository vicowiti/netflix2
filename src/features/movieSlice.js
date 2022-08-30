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
    upcoming: [],
    horror: [],
    trending: [],
    topRated: [],
  },
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/popular",
  async () => {
    const response = await axios.get(requestPopular);

    return response.data.results;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/upcoming",
  async () => {
    const response = await axios.get(requestUpcoming);

    return response.data.results;
  }
);

export const fetchHorrorMovies = createAsyncThunk("movies/horror", async () => {
  const response = await axios.get(requestHorror);

  return response.data.results;
});

export const fetchTrendingMovies = createAsyncThunk(
  "movies/trending",
  async () => {
    const response = await axios.get(requestTrending);

    return response.data.results;
  }
);

export const fetchTopMovies = createAsyncThunk("movies/topRated", async () => {
  const response = await axios.get(requestTopRated);

  return response.data.results;
});

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
    [fetchUpcomingMovies.fulfilled]: (state, { payload }) => {
      state.movies.upcoming = payload;
    },
    [fetchUpcomingMovies.pending]: () => {
      console.log("pending");
    },
    [fetchUpcomingMovies.rejected]: (state, { payload }) => {
      console.log("rejected", payload);
    },
    [fetchHorrorMovies.fulfilled]: (state, { payload }) => {
      state.movies.horror = payload;
    },
    [fetchTrendingMovies.fulfilled]: (state, { payload }) => {
      state.movies.trending = payload;
    },
    [fetchTopMovies.fulfilled]: (state, { payload }) => {
      state.movies.topRated = payload;
    },
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;

//Selector Functions

export const selectPopularMovies = (state) => state.movies.movies.popular;
export const selectHorrorMovies = (state) => state.movies.movies.horror;
export const selectTrendingMovies = (state) => state.movies.movies.trending;
export const selectTopRatedMovies = (state) => state.movies.movies.topRated;
export const selectUpcomingMovies = (state) => state.movies.movies.upcoming;
