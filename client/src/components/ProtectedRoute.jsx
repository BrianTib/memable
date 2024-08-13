import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); 
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
