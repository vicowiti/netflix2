import React from "react";

const Main = ({ randomMovie }) => {
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full relative">
        <div className="absolute bg-gradient-to-r from-black top-0 left-0 right-0 bottom-0"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="font-bold text-3xl md:text-5xl">
            {randomMovie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black py-2 px-5 border-green-300">
              Play
            </button>
            <button className="border  text-white ml-4 py-2 px-5 border-green-300">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {randomMovie?.release_date}
          </p>
          <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {randomMovie?.overview.substring(0, 150)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
