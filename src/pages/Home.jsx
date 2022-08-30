import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import {
  fetchPopularMovies,
  selectPopularMovies,
} from "../features/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);
  const data = useSelector(selectPopularMovies);

  const randomIndex = Math.floor(Math.random() * data.length);

  const randomMovie = data[randomIndex];

  return (
    <div>
      <Main randomMovie={randomMovie} />
    </div>
  );
};

export default Home;
