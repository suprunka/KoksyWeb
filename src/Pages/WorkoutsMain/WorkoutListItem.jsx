import PropTypes from "prop-types"
import moment from "moment"
import React from "react";
import 'moment/locale/pl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { GetColorByDate } from "../../Components/ColorPicker";

function WorkoutListItem({name, lastOpened, onClick, workoutsCount}) {
console.log(workoutsCount)
  return (<div className="listItem" onClick={(e)=>onClick(e.target.value)}>
    <div className="titleListItem">
    <p className="mr-4">
  <FontAwesomeIcon icon={faDumbbell} fontSize="35" color={`var(${GetColorByDate(lastOpened)})`} />
      </p>

    <p>{name} 
</p>
<div className="rightCornerText">
<p className={`rightCornerText dateText ${GetColorByDate(lastOpened)} bg${GetColorByDate(lastOpened)}-opacity `}>{FormatDate(lastOpened)}</p>
{/* <p className="smallText gray">10 {workoutsCount} cwiczen</p> */}
</div>
    </div>   
  </div>)
}

export default WorkoutListItem;
WorkoutListItem.propTypes = {
    name: PropTypes.string,
    lastOpened: PropTypes.instanceOf(Date),
    onClick :PropTypes.func.any,
    workoutsCount :PropTypes.number,
  };

  function FormatDate(date){
    var daysAgo = Math.round((new Date()-new Date(date))/ (1000 * 60 * 60 * 24),0)
    if(daysAgo == 1)
    return "wczoraj"
    else if(daysAgo<=5)
    return  `${daysAgo} dni temu`
    else
    return new moment(date).locale("pl").calendar();

  }