import React, {useEffect } from "react";
import WorkoutListItem from "./WorkoutListItem";
import {MainLayout} from "../../Components/Layout"
import { useNavigate } from "react-router-dom";
import { fetchAll } from "../../redux/actions/workoutDayActions";
import { useDispatch, useSelector } from "react-redux";

function WorkoutsList() {
    let navigate = useNavigate();
    const name = "Treningi"
    const {list} = useSelector(state=> state.workoutDays)
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchAll()) }, []);

  const handleDayClick = id => {
    navigate(`${id}`)
  };

  return (
  <MainLayout pageName={name}>
    <div> {list?.map(el =>
         <WorkoutListItem key={el.id}
          name={el.name} 
          lastOpened={el.lastOpened}
          // workoutsCount={el.workouts.length}
          onClick={()=>handleDayClick(el.id)}
          />)} 
</div>   
  </MainLayout>)
}

export default WorkoutsList;
