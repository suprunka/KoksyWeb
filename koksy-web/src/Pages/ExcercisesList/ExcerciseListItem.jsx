import PropTypes from "prop-types"

import React from "react";

function ExcerciseListItem({name, sessions, breakSeconds, minRepeat, maxRepeat}) {

  return (<div className="">
    <div className="">
        <div className="display-flex">
        <p className="listItemTitle">{name}</p>
        <p className="smallText rightCornerText">x{minRepeat}-{maxRepeat}</p>
        </div>
        <div className="display-flex">
        <div className="display-inline detilsExcerciseListItem">
        <p className="">Przerwa: {formatBreakDuration(breakSeconds)}</p>
        <p className="">Serie: {sessions}</p>
        </div>
        <button className="m-auto"></button>

        </div>
    </div>

   
  </div>)
}

export default ExcerciseListItem;
ExcerciseListItem.propTypes = {
    name: PropTypes.string,
    sessions :PropTypes.number,
    breakSeconds :PropTypes.number,
    minRepeat :PropTypes.number,
    maxRepeat :PropTypes.number,
};

function formatBreakDuration(seconds){
    var minSeconds = seconds % 60
    var minutes = Math.floor(seconds / 60,0)
    console.log(seconds)
    console.log(minSeconds)
    console.log(minutes)
    if(seconds<60)
    return `${seconds} sec`
    else  
    return`${minutes} min ${minSeconds} sec`
}
