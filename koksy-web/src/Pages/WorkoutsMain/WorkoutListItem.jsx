import PropTypes from "prop-types"
import moment from "moment"
import React from "react";
import 'moment/locale/pl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

function WorkoutListItem({name, lastOpened, onClick}) {

  const color=()=> {
    var daysAgo = Math.round((new Date()-new Date(lastOpened))/ (1000 * 60 * 60 * 24),0)
    if(daysAgo>4)
    return "def-orange" 
    if(daysAgo>4)
    return "def-yellow"
    return "def-blue"
  }

  return (<div className="listItem" onClick={(e)=>onClick(e.target.value)}>
    <div className="titleListItem">
    <p className="mr-4">
  <FontAwesomeIcon icon={faDumbbell} fontSize="35" color={`var(--${color()})`} />
      </p>

    <p>{name} 
</p>
    <p className={`rightCornerText dateText ${color()}-border`}>{FormatDate(lastOpened)}</p>
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