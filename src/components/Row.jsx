import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ selector, toDispatch, title, rowId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toDispatch());
  }, []);

  const data = useSelector(selector);

  const scrollLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="group">
      <h1 className="text-white font-bold p-4 md:text-xl">{title}</h1>
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
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide"
        >
          {data?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
