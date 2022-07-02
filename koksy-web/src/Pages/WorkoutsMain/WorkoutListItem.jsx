import PropTypes from "prop-types"

import React from "react";

function WorkoutListItem({name, lastOpened}) {

  return (<div className="listItem">
    <div className="titleListItem">
    <p>{name}</p>
    <p className="rightCornerText dateText">{FormatDate(lastOpened)}</p>

    </div>

   
  </div>)
}

export default WorkoutListItem;
WorkoutListItem.propTypes = {
    name: PropTypes.string,
    lastOpened: PropTypes.instanceOf(Date)
  };

  function FormatDate(date){

    var daysAgo = Math.round((new Date()-new Date(date))/ (1000 * 60 * 60 * 24),0)
    if(daysAgo == 1)
    return "yesterday"
    else if(daysAgo<=5)
    return  `${daysAgo} days ago`
    else
    return new Date(date).toString("DD.MM.YYYY")

  }