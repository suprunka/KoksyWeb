import React from "react";
import {MainLayout} from "../../Components/Layout"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux/es/exports";
import {addSession, fetchLastSessions} from "../../redux/actions/workoutSessionActions"
import ExerciseSessionsListItem from "./ExerciseSessionsListItem";
import { useEffect } from "react";
import { fetchOne } from "../../redux/actions/exercisesActions";
function ExerciseSessionsList() {
  const dispatch = useDispatch()
  const {id} = useParams()

  var {exercise} = useSelector(state=> state.exercise)
useEffect(()=>{
  var array = [1,2,3]
  console.log(array.find(s=> s ==1))
dispatch(fetchOne(id)),
dispatch(fetchLastSessions(id))
},[id])

const {lastSessions} = useSelector(state=> state.workoutSession)
const ssss = useSelector(state=> state.workoutSession)
console.log(ssss)
  var handleSaveRep=(reps, weight,setNumber)=>{
    if(reps>0 && weight >0){
      var request = {
        reps:reps,
        weight: weight,
        setNumber:setNumber,
        workoutId:id
      }
     dispatch(addSession(request))

    }
  }
  console.log(lastSessions)

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
        saveRep={handleSaveRep}
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
