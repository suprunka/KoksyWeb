import PropTypes from "prop-types"
import React from "react";
import { BasicInput } from "../../Components/Inputs";
import {Container, Row, Col} from "react-bootstrap"
import Timer from './Timer'
import { useState } from "react";
function ExerciseSessionsListItem({
   breakSeconds,
   setNumber,
   previousWeight,
   previousReps,
    saveRep}) {
      var [showBreak, setShowBreak] = useState(false);
      var [reps, setReps] = useState(0);
      var [weight, setWeight] = useState(0);
      var handleBreakClicked =()=>{
        saveRep(parseInt(reps), parseFloat(weight),setNumber);
        setShowBreak(true)
      }
console.log(previousReps,setNumber)
  return (<div className="listItem">
    {showBreak == true ?
   <Timer  onClick={()=> setShowBreak(false)} secondToCount={breakSeconds}/>:
     <Container fluid>
     <Row className="mb-2">
       <Col  className="smallText">{previousReps } {previousReps != null ? "x":""}</Col>
       <Col ></Col>
       <Col  className="smallText">{previousWeight} {previousWeight != null ? "kg":""}</Col>
       <Col xs={1}></Col>
     </Row>
     <Row>
     <Col>
           <BasicInput definedStyles="bigInput" value={reps} type="number" handleChange={(val)=>{setReps(val)}}/>
       </Col>
       <Col className="text-center" style={{paddingTop:"12px", fontSize:"14px"}}>x</Col>
       <Col className="display-flex">  
           <BasicInput definedStyles="bigInput" value={weight} type="number" handleChange={(val)=> setWeight(val)}/></Col>
      
       <Col xs={1}style={{paddingTop:"20px",paddingLeft:"0px", paddingBottom:"0px"}} >kg</Col>
     </Row>
     <Row>
       <Col>
       <button className="breakBtn"  onClick={handleBreakClicked}>Przerwa</button>
       </Col>
     </Row>
   </Container> }
   
  </div>)
}

export default ExerciseSessionsListItem;
ExerciseSessionsListItem.propTypes = {
    previousReps: PropTypes.number,
    previousWeight: PropTypes.number,
    saveRep: PropTypes.func,
    breakSeconds:PropTypes.number,
    setNumber:PropTypes.number,
  };

