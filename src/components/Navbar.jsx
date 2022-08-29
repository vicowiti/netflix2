import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between p-4 z-[100] absolute top-0 left-0 w-full">
      <h1 className="text-red-600 font-bold text-4xl cursor-pointer">NREEL</h1>
      <nav className="flex gap-4">
        <button className="bg-white text-red-600 py-2 px-6 rounded">
          Sign In
        </button>
        <button className="bg-red-600 py-2 px-6 rounded">Sign Up</button>
      </nav>
    </div>
  );
};

export default Navbar;
