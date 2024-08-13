import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Example of an authentication function; you could check for a token or session
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // Adjust based on your auth logic
};

const ProtectedRoute = ({ element: Element }) => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Element />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
