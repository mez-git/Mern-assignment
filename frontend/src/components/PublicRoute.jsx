import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('userToken');

  if (token) {
    
    return <Navigate to="/todos" />;
  }

  return element;
};

export default PublicRoute;
