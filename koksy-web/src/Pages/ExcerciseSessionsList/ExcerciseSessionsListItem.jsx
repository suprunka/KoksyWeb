import PropTypes from "prop-types"

import React from "react";
import { BasicInput } from "../../Components/Inputs";
import {Container, Row, Col, Button} from "react-bootstrap"
function ExcerciseSessionsListItem({previousWeight, previousReps, weight, reps, handleWeightChanged, handleRepsChanged}) {

  return (<div className="listItem">
    <div className="titleListItem">
    <p> </p>
    <Container fluid>
  <Row>
    <Col xs={6} className="smallText">{previousReps } {previousReps != null ? "x":""}</Col>
    <Col xs={6} className="smallText">{previousWeight} {previousReps != null ? "kg":""}</Col>
  </Row>
  <Row>
    <Col className="display-flex">  
        <BasicInput value={weight}type="number" handleChange={handleWeightChanged}/></Col>
        <Col>x</Col>
    <Col>
        <BasicInput value={reps} type="number" handleChange={handleRepsChanged}/>
    </Col>
    <Col>kg</Col>
  </Row>
  <Row>
    <Col>
    <Button className="mt-2 mb-2">Przerwa</Button></Col>
  </Row>
</Container>


    </div>

   
  </div>)
}

export default ExcerciseSessionsListItem;
ExcerciseSessionsListItem.propTypes = {
    previousReps: PropTypes.number,
    previousWeight: PropTypes.number,
    weight: PropTypes.number,
    reps: PropTypes.number,
    handleWeightChanged: PropTypes.string,
    handleRepsChanged: PropTypes.string,
  };

