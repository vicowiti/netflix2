import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="text-white w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/448be807-2721-4339-8e1c-26ce90741649/KE-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix bg"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bg-black/60  top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
