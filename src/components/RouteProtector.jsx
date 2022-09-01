import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../authContext/Auth";

const RouteProtector = ({ children }) => {
  const { user } = userAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RouteProtector;
