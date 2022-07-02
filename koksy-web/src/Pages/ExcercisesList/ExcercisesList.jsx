import React from "react";
import {MainLayout} from "../../Components/Layout"
import ExcerciseListItem from "./ExcerciseListItem";
function ExcercisesList() {
    var excercises= [{name:"Hip thrust", sessions:3, breakSeconds:90, minRepeat:8, maxRepat:10}]
  return (<MainLayout>
    <p>Excercises</p>
    {excercises.map(e=> 
    <ExcerciseListItem key={e}
    name={e.name}
    sessions={e.sessions}
    breakSeconds={e.breakSeconds}
    minRepeat={e.minRepeat}   
    maxRepeat={e.maxRepat}
    />)}
  </MainLayout>)
}

export default ExcercisesList;
