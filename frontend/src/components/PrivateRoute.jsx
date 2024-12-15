import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('userToken'); 

  if (!token) {
    
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
