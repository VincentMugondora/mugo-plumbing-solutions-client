// import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import NotFound from "../components/404/NotFound"; 
import NotAuthorized from "./NotAuthorized";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <NotAuthorized />;
  }

  return children;
};

export default PrivateRoute;
