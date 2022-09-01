import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { userAuth } from "../authContext/Auth";
import { db } from "../firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);

  const { user } = userAuth();

  const scrollLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const handleRemoveMovie = async (passedId) => {
    try {
      const result = movies?.filter((item) => item.id !== passedId);

      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(movies);
  return (
    <div>
      <div className="group">
        <h1 className="text-white font-bold p-4 md:text-xl">My Shows</h1>
        <div className="relative flex items-center">
          <MdChevronLeft
            onClick={scrollLeft}
            size={30}
            className="bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer left-0 hidden group-hover:block"
          />
          <MdChevronRight
            onClick={scrollRight}
            size={30}
            className="bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 hidden group-hover:block"
          />

          <div
            id={"slider"}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide"
          >
            {movies?.map((movie) => (
              <div
                key={movie?.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                  className="w-full h-auto block"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex items-center justify-center text-white">
                  <p className="text-white z-20">{movie.title}</p>
                  <p
                    className="text-gray-300 absolute top-4 right-4"
                    onClick={() => handleRemoveMovie(movie.id)}
                  >
                    <AiOutlineClose size={20} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedShows;
