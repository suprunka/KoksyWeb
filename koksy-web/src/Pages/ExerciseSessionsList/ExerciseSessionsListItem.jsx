import PropTypes from "prop-types"

import React from "react";
import { BasicInput } from "../../Components/Inputs";
import {Container, Row, Col, Button} from "react-bootstrap"
import Timer from './Timer'
import { useState } from "react";
function ExerciseSessionsListItem({previousWeight,
   previousReps,
  weight,
   reps,
    handleWeightChanged,
     handleRepsChanged,
    saveRep}) {
      var [showBreak, setShowBreak] = useState(false);
      var handleBreakClicked =()=>{
        saveRep();
        setShowBreak(true)
      }

  return (<div className="listItem">
    {showBreak == true ?
   <Timer  onClick={()=> setShowBreak(false)} secondToCount={90}/>:
     <Container fluid>
     <Row className="mb-2">
       <Col  className="smallText">{previousReps } {previousReps != null ? "x":""}</Col>
       <Col ></Col>
       <Col  className="smallText">{previousWeight} {previousWeight != null ? "kg":""}</Col>
       <Col xs={1}></Col>
     </Row>
     <Row>
     <Col>
           <BasicInput value={reps} type="number" handleChange={handleRepsChanged}/>
       </Col>
       <Col className="text-center">x</Col>
       <Col className="display-flex">  
           <BasicInput value={weight} type="number" handleChange={handleWeightChanged}/></Col>
      
       <Col xs={1}>kg</Col>
     </Row>
     <Row>
       <Col>
       <Button className="breakBtn"  onClick={handleBreakClicked}>Przerwa</Button>
       </Col>
     </Row>
   </Container> }
   
  </div>)
}

export default ExerciseSessionsListItem;
ExerciseSessionsListItem.propTypes = {
    previousReps: PropTypes.number,
    previousWeight: PropTypes.number,
    weight: PropTypes.number,
    reps: PropTypes.number,
    handleWeightChanged: PropTypes.string,
    handleRepsChanged: PropTypes.string,
    saveRep: PropTypes.func
  };

