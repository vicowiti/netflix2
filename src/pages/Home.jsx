import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import Row from "../components/Row";
import {
  fetchHorrorMovies,
  fetchPopularMovies,
  fetchTopMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  selectHorrorMovies,
  selectPopularMovies,
  selectTopRatedMovies,
  selectTrendingMovies,
  selectUpcomingMovies,
} from "../features/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);
  const popularMovies = useSelector(selectPopularMovies);

  const randomIndex = Math.floor(Math.random() * popularMovies.length);

  const randomMovie = popularMovies[randomIndex];

  return (
    <div>
      <Main randomMovie={randomMovie} />
      <Row
        rowId="1"
        title="Upcoming"
        selector={selectUpcomingMovies}
        toDispatch={fetchUpcomingMovies}
      />

      <Row
        rowId="2"
        title="Horror"
        selector={selectHorrorMovies}
        toDispatch={fetchHorrorMovies}
      />

      <Row
        rowId="3"
        title="Trending"
        selector={selectTrendingMovies}
        toDispatch={fetchTrendingMovies}
      />

      <Row
        rowId="4"
        title="Top Rated"
        selector={selectTopRatedMovies}
        toDispatch={fetchTopMovies}
      />

      <Row
        rowId="5"
        title="Popular"
        selector={selectPopularMovies}
        toDispatch={fetchPopularMovies}
      />
    </div>
  );
};

export default Home;
