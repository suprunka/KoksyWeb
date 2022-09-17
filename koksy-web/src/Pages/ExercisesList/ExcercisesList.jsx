import React, { useEffect } from "react";
import {MainLayout} from "../../Components/Layout"
import ExerciseListItem from "./ExerciseListItem";
import { fetchForWorkout } from "../../redux/actions/exercisesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function ExercisesList() {
  const {workoutExercises} = useSelector(state=> state.exercise)
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => { dispatch(fetchForWorkout(id)) }, []);
  return (<MainLayout>
    <p>Exercises</p>
    {workoutExercises.map(e=> 
    <ExerciseListItem key={e}
    name={e.name}
    sessions={e.sessionsCount}
    breakSeconds={e.breakSeconds}
    minRepeat={e.minReps}   
    maxRepeat={e.maxReps}
    />)}
  </MainLayout>)
}

export default ExercisesList;
