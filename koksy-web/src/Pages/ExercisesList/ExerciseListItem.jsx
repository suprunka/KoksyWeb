import PropTypes from "prop-types"

import React from "react";

function ExerciseListItem({name, sessions, breakSeconds, minRepeat, maxRepeat, onClick}) {

  return (<div className="listItem" onClick={()=> onClick()}>
        <div className="display-flex">
        <p className="listItemTitle">{name}</p>
        <p className="smallText rightCornerText">x{minRepeat}-{maxRepeat}</p>
        </div>
        <div className="display-flex">
        <div className="display-inline detilsExerciseListItem">
        <p className="">Przerwa: {formatBreakDuration(breakSeconds)}</p>
        <p className="">Serie: {sessions}</p>
        </div>
        </div>   
  </div>)
}

export default ExerciseListItem;
ExerciseListItem.propTypes = {
    name: PropTypes.string,
    sessions :PropTypes.number,
    breakSeconds :PropTypes.number,
    minRepeat :PropTypes.number,
    maxRepeat :PropTypes.number,
    onClick :PropTypes.func,
};

function formatBreakDuration(seconds){
    var minSeconds = seconds % 60
    var minutes = Math.floor(seconds / 60,0)
    if(seconds<60)
    return `${seconds} sec`
    else  
    return`${minutes} min ${minSeconds} sec`
}
