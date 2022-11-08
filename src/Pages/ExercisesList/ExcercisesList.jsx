import React, { useEffect } from "react";
import {MainLayout} from "../../Components/Layout"
import ExerciseListItem from "./ExerciseListItem";
import { fetchForWorkout } from "../../redux/actions/exercisesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
function ExercisesList() {
  const {workoutExercises} = useSelector(state=> state.exercise)
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const onClick = (id)=> navigate(`/workoutsession/${id}`)
  useEffect(() => { dispatch(fetchForWorkout(id)) }, []);
  return (<MainLayout pageName={"Cwiczenia"}>
    {workoutExercises.map(e=> 
    <ExerciseListItem key={e}
    onClick={onClick}
    name={e.name}
    id={e.id}
    sessions={e.sessionsCount}
    breakSeconds={e.breakSeconds}
    minRepeat={e.minReps}   
    maxRepeat={e.maxReps}
    />)}
  </MainLayout>)
}

export default ExercisesList;
