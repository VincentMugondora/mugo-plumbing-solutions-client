// src/components/ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { user } = useAuth(); 

  const isAuthorized = () => {
    if (!user) return false; 
    if (!allowedRoles) return true; 
    return allowedRoles.includes(user.role); 
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" /> 
        )
      }
    />
  );
};

export default ProtectedRoute;
