import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import ExcerciseSessionsList from './Pages/ExcerciseSessionsList';
import ExcercisesList from './Pages/ExcercisesList/ExcercisesList';
import Login from './Pages/Login'
import WorkoutsList from './Pages/WorkoutsMain';
import { AuthProvider, ProtectedRoute } from './Services/AuthProvider';
export const AuthContext = React.createContext(null);

const App = () => {
  return (
    <AuthProvider>
<Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/workouts' element={<ProtectedRoute><Login/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/work' element={<ExcercisesList/>} />
        <Route path='/cc' element={<WorkoutsList/>} />
        <Route path='/list/:name' element={<ExcerciseSessionsList/>} />
      </Routes>
    </Router>
    </AuthProvider>
   );
}
 
export default App;