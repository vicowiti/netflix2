import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { userAuth } from "../authContext/Auth";
import { db } from "../firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(false);

  const [saved, setSaved] = useState(false);

  const { user } = userAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Log in to save shows");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex items-center justify-center text-white">
        <p className="text-white z-20">{movie.title}</p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
