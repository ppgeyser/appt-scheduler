//Dependencies
import React from "react";
import store from "store";
import {
  Container,
  Row,
  Col
} from "reactstrap";

//Components
import AppJumbotron from "./components/AppJumbotron";
import InputForm from "./components/InputForm";

function App() {
  return (
    <Container fluid>

      <AppJumbotron />

      <Row>

        <Col sm="3">
          <InputForm />
        </Col>

        <Col sm="9">
        </Col>

      </Row>

    </Container>
  );
}

export default App;
