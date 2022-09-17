import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import ExerciseSessionsList from './Pages/ExerciseSessionsList';
import ExercisesList from './Pages/ExercisesList/ExcercisesList';
import Login from './Pages/Login'
import WorkoutsList from './Pages/WorkoutsMain';
import { ProtectedRoute } from './Services/AuthProvider';
export const AuthContext = React.createContext(null);

const App = () => {
  return (
<Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/workouts' element={<ProtectedRoute><WorkoutsList/></ProtectedRoute>} />
        <Route path='/workouts/:id' element={<ProtectedRoute><ExercisesList/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/workoutSession/:id' element={<ProtectedRoute><ExerciseSessionsList/></ProtectedRoute>} />
        <Route path='/workoutdays' element={<WorkoutsList/>} />
        <Route path='/workoutdays/:id' element={<ExercisesList/>} />
        <Route path='/list/:name' element={<ExerciseSessionsList/>} />
      </Routes>
    </Router>
   );
}
 
export default App;