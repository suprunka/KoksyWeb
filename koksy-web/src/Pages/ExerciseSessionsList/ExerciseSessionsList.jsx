import React from "react";
import {MainLayout} from "../../Components/Layout"
import { useParams } from 'react-router-dom'

import ExerciseSessionsListItem from "./ExerciseSessionsListItem";
function ExerciseSessionsList() {
  var exercise={name:"Hip thrust", sessions:3, breakSeconds:90, minRepeat:8, maxRepat:10}
  var previousSession={reps:90, weight:10}
  const { name } = useParams()
  const getSessions = exercise => {
    let content = [];
    for (let session = 0;session< exercise.sessions; session++) {
      content.push(  <ExerciseSessionsListItem 
        key={session}
        name={exercise.name}
        previousReps={previousSession.reps}
        />);
    }
    return content;
  };
  return (<MainLayout>
    <p>{name}</p>
    <div> 
{getSessions(exercise)}
</div>   
  </MainLayout>)
}

export default ExerciseSessionsList;
