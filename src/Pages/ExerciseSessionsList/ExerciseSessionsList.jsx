import React from "react";
import {MainLayout} from "../../Components/Layout"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux/es/exports";
import {addSession, fetchLastSessions} from "../../redux/actions/workoutSessionActions"
import ExerciseSessionsListItem from "./ExerciseSessionsListItem";
import { useEffect } from "react";
import { fetchOne } from "../../redux/actions/exercisesActions";
import { useState } from "react";
function ExerciseSessionsList() {
  const dispatch = useDispatch()
  const {id} = useParams()

  var {exercise} = useSelector(state=> state.exercise)
useEffect(()=>{
dispatch(fetchOne(id)),
dispatch(fetchLastSessions(id))
},[id])

const {lastSessions} = useSelector(state=> state.workoutSession)
var [possibleReps, setPossibleReps] = useState(0);
var [possibleWeight, setPossileWeight] = useState(0);


var handleSaveRep=(reps, weight,setNumber)=>{
    if(reps>0 && weight >0){
      var request = {
        reps:reps,
        weight: weight,
        setNumber:setNumber,
        workoutId:id
      }
     dispatch(addSession(request))
     setPossibleReps(reps)
     setPossileWeight(weight)
    }
  }

  const getSessions = exercise => {
    let content = [];
    for (let session = 0;session< exercise.sessionsCount; session++) {
      content.push(  <ExerciseSessionsListItem 
        key={session}
        workoutId={id}
        setNumber={session}
        breakSeconds={exercise.breakSeconds}
        name={exercise.name}
        previousReps={lastSessions.find(s=> s.setNumber == session)?.reps}
        previousWeight={lastSessions.find(s=> s.setNumber == session)?.weight}
        possibleReps ={possibleReps}
        possibleWeight={possibleWeight}
        saveRep={handleSaveRep}
        />);
    }
    return content;
  };
  console.log(exercise.url)
  return (<MainLayout pageName={exercise.name} className="bg-white">
    <div className="sessions"> 
    <iframe height="200px" className="w-100 border-radius" src="https://www.youtube.com/embed/Zp26q4BY5HE"
     title="YouTube video player"
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{getSessions(exercise)}
</div>   
  </MainLayout>)
}

export default ExerciseSessionsList;
