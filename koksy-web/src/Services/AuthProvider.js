import React from 'react';
import {
    Navigate,useLocation
  } from 'react-router-dom';
import {AuthContext}  from "../App"
  export const AuthProvider = ({ children }) => {
  //  const navigate = useNavigate();

    const [token, setToken] = React.useState(null);
  
    const handleLogin = async () => {
      const token = await fakeAuth();
  
      setToken(token);
   //   navigate('/dashboard');
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  AuthProvider.propTypes = {
    children: React.Component
  };
  export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
      return <Navigate to="/home" replace state={{ from: location }} />;
    }
  
    return children;
  };
  ProtectedRoute.propTypes = {
    children: React.Component
  };

  export const useAuth = () => {
    return React.useContext(AuthContext);
  };

  export const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });