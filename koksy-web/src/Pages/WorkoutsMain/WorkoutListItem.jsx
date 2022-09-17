import PropTypes from "prop-types"
import moment from "moment"
import React from "react";
import 'moment/locale/pl';

function WorkoutListItem({name, lastOpened, onClick}) {

  return (<div className="listItem" onClick={(e)=>onClick(e.target.value)}>
    <div className="titleListItem">
    <p>{name}</p>
    <p className="rightCornerText dateText">{FormatDate(lastOpened)}</p>
    </div>   
  </div>)
}

export default WorkoutListItem;
WorkoutListItem.propTypes = {
    name: PropTypes.string,
    lastOpened: PropTypes.instanceOf(Date),
    onClick :PropTypes.func.any,
  };

  function FormatDate(date){
    var daysAgo = Math.round((new Date()-new Date(date))/ (1000 * 60 * 60 * 24),0)
    if(daysAgo == 1)
    return "yesterday"
    else if(daysAgo<=5)
    return  `${daysAgo} days ago`
    else
    return new moment(date).locale("pl").calendar();

  }