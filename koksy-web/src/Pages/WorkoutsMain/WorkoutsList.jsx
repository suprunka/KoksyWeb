import React from "react";
import WorkoutListItem from "./WorkoutListItem";
import {MainLayout} from "../../Components/Layout"
function WorkoutsList() {
    var worktypes= [{name:"Dzine 1", lastOpened:new Date(2022, 6, 1).toDateString()}]
  return (<MainLayout>
    <p>Workouts</p>
    <div> {worktypes.map(el => <WorkoutListItem key={el} name={el.name} lastOpened={el.lastOpened}></WorkoutListItem>) } 
</div>   
  </MainLayout>)
}

export default WorkoutsList;
