import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const ApptCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>What: {props.description}</CardTitle>
        <CardSubtitle>Where: {props.location}</CardSubtitle>
        <CardText>When: {props.startDate}</CardText>
        <Button className="float-right" color="primary" onClick={props.editBtn}>Edit</Button>
        <Button className="float-right mr-1" color="danger" onClick={props.deleteBtn}>Delete</Button>
      </CardBody>
    </Card>
  )
}

export default ApptCard;