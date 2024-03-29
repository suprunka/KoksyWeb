import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import UserForm from './Admin/User/RegisterUsers';
import {  MainLayuotRoutes } from './MainLayuotRoutes';
import Login from './Pages/Login';
export const AuthContext = React.createContext(null);

const App = () => {
  return (
<Router>
      <Routes>
      <Route path='/' exact element={<Login/>} />
      <Route path='/signup' exact element={<UserForm/>} />
       <Route path="*" element={<MainLayuotRoutes />} />
      </Routes>
    </Router>
   );
}
 
export default App;