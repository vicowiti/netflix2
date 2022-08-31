import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../authContext/Auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = userAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        await logIn(email, password);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
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
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form
              className="flex flex-col py-4 w-full"
              onSubmit={(e) => handleLogin(e)}
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
              {error ? <p className="text-red-600 underline">{error}</p> : null}
              <button className="bg-red-600 py-3 my-6 rounded">Sign In</button>
              <div className="flex justify-between text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me?
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-gray-600">
                New to Nreel?{" "}
                <span className="text-white">
                  <Link to="/register">Sign Up.</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
