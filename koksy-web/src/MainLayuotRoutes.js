import React from "react";

import { Route, Routes  } from 'react-router-dom';
import Navbar from './Components/Navbar/index';
import ExerciseSessionsList from './Pages/ExerciseSessionsList';
import ExercisesList from './Pages/ExercisesList/ExcercisesList';
import Login from './Pages/Login'
import WorkoutsList from './Pages/WorkoutsMain';
import { ProtectedRoute } from './Services/AuthProvider';
const MainLayuotRoutes = () => {
    return (
  <React.Fragment>
  <Navbar />
  
        <Routes>
          <Route path='/workouts' element={<ProtectedRoute><WorkoutsList/></ProtectedRoute>} />
          <Route path='/workouts/:id' element={<ProtectedRoute><ExercisesList/></ProtectedRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/workoutSession/:id' element={<ProtectedRoute><ExerciseSessionsList/></ProtectedRoute>} />
          <Route path='/workoutdays' element={<WorkoutsList/>} />
          <Route path='/workoutdays/:id' element={<ExercisesList/>} />
          <Route path='/list/:name' element={<ExerciseSessionsList/>} />
        </Routes>
      </React.Fragment>
     );

    }

  export  {MainLayuotRoutes};