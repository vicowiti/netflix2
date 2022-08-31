import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../authContext/Auth";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, createUser } = userAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        await createUser(email, password);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/448be807-2721-4339-8e1c-26ce90741649/KE-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="netflix bg"
        className="hidden sm:block absolute w-full h-full object-cover"
      />
      <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form
              className="flex flex-col py-4 w-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="bg-red-600 py-3 my-6 rounded">
                Sign Up
              </button>
              <div className="flex justify-between text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me?
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-gray-600">
                Already subscribed to NReel?{" "}
                <span className="text-white">
                  <Link to="/login">Sign in.</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
