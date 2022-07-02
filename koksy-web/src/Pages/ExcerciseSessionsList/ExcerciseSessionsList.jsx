import React from "react";
import {MainLayout} from "../../Components/Layout"
import { useParams } from 'react-router-dom'

import ExcerciseSessionsListItem from "./ExcerciseSessionsListItem";
function ExcerciseSessionsList() {
  var excercise={name:"Hip thrust", sessions:3, breakSeconds:90, minRepeat:8, maxRepat:10}
  var previousSession={reps:90, weight:10}
  const { name } = useParams()
  const getSessions = excercise => {
    let content = [];
    for (let session = 0;session< excercise.sessions; session++) {
      content.push(  <ExcerciseSessionsListItem 
        key={session}
        name={excercise.name}
        previousReps={previousSession.reps}
        />);
    }
    return content;
  };
  return (<MainLayout>
    <p>{name}</p>
    <div> 
{getSessions(excercise)}
</div>   
  </MainLayout>)
}

export default ExcerciseSessionsList;
