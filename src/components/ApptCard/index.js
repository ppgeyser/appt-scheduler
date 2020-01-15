import React from 'react';
import { Card } from 'reactstrap';

const ApptCard = (props) => {
  return (
    <Card
      key={props.key}
    >
      <h6>What: {props.description}</h6>
      <hr />
      <p>Where: {props.location}</p>
      <p>When: {props.startDate}</p>
    </Card>
  )
}

export default ApptCard;