import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../authContext/Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = userAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white flex justify-between p-4 z-[100] absolute top-0 left-0 w-full">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          NREEL
        </h1>
      </Link>
      <nav className="flex gap-4">
        {user ? (
          <Link to="/account">
            <button className=" text- py-2 px-6 ">Account</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className=" text- py-2 px-6 ">Sign In</button>
          </Link>
        )}
        {user ? (
          <button
            className="bg-red-600 py-2 px-6 rounded"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/register">
            <button className="bg-red-600 py-2 px-6 rounded">Sign Up</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
