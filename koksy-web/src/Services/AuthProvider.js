import React from 'react';
import {
    Navigate,useLocation  } from 'react-router-dom';


  export const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const token =  localStorage.getItem('token')
    console.log(token)
    if (!token) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
    return children;
  };
  ProtectedRoute.propTypes = {
    children: React.Component
  };

 