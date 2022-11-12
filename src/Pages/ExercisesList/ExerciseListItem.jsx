import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import { faClock } from '@fortawesome/free-solid-svg-icons'

import React from "react";
import { GetColor } from "../../Components/ColorPicker";

function ExerciseListItem({id,name, sessions, breakSeconds, minRepeat, maxRepeat, onClick, index}) {
console.log(index, sessions)
  return (<div className="listItem" onClick={()=> onClick(id)}>
        <div className={`display-flex `}>
        <p className="listItemTitle">{name}</p>
        <p className={`rightCornerText ${GetColor(index)}`}>x{minRepeat}-{maxRepeat}</p>
        </div>
        <div className="display-flex">
        <div className="display-inline detilsExerciseListItem">
        <p className={`smallRoundLabel ${GetColor(index)}  bg${GetColor(index)}-opacity`}>
          <FontAwesomeIcon icon={faClock} className="pr-1" />
          {formatBreakDuration(breakSeconds)}</p>
        {/* <p className="">Serie: {sessions}</p> */}
        </div>
        </div>   
  </div>)
}

export default ExerciseListItem;
ExerciseListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  sessions :PropTypes.number,
    breakSeconds :PropTypes.number,
    minRepeat :PropTypes.number,
    maxRepeat :PropTypes.number,
    onClick :PropTypes.func,
    index :PropTypes.number,

};

function formatBreakDuration(seconds){
    var minSeconds = seconds % 60
    var secText = `00`
    if(minSeconds>0)
       secText = `${minSeconds}s`
    var minutes = Math.floor(seconds / 60,0)
    if(seconds<60)
    return secText
    else  
    return`${minutes}:${secText}`
}
