//Dependencies
import React from "react";
import store from "store";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function App() {
  return (
    <Container fluid>

      <Jumbotron>
        <h1 className="display-3">Appointment Scheduler</h1>
          <p className="lead">Create, read, update, and delete your appointments!</p>
      </Jumbotron>

      <Row>

        <Col sm="3">
          <Card>
            <CardHeader>Create New Appointment</CardHeader>
            <CardBody>
              <Form>
                
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col sm="9">
        </Col>

      </Row>

    </Container>
  );
}

export default App;
