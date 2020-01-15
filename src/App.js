//Dependencies
import React, {useState, useEffect} from "react";
import store from "store";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import DatePicker from "react-datepicker";
import uuid from "uuid/v4";
import "react-datepicker/dist/react-datepicker.css";

//Components
import AppJumbotron from "./components/AppJumbotron";
import useInputForm from "./components/useInputForm";
import ApptCard from "./components/ApptCard";

function App() {

  const formSubmit = () => {
    let key = uuid();
    store.set(key, {
      description: `${inputs.description}`,
      location: `${inputs.location}`,
      dateTime: `${startDate}`
    })
    alert(`Event Created!`)
  }

  const [startDate, setStartDate] = useState(new Date());
  const {inputs, handleInputChange, handleSubmit} = useInputForm({description: '', location: ''}, formSubmit);

  return (
    <Container fluid>

      <AppJumbotron />

      <Row>

        <Col sm="3">
          <Card>
            
            <CardHeader>Create New Appointment</CardHeader>
            
            <CardBody>
              <Form onSubmit={handleSubmit}>

                <FormGroup>
                  <Label for="descriptionInput">What is the appointment?</Label>
                  <Input 
                    type="text" 
                    name="description" 
                    id="descriptionInput"
                    onChange={handleInputChange} 
                    value={inputs.description} 
                    placeholder="Describe Your Appointment" />
                </FormGroup>

                <FormGroup>
                  <Label for="LocationInput">WHere is your appointment?</Label>
                  <Input 
                    type="text" 
                    name="location" 
                    id="locationInput"
                    onChange={handleInputChange} 
                    value={inputs.location} 
                    placeholder="Appointment Location" />
                </FormGroup>

                <FormGroup>
                  <Label for="datetimeInput">When is your appointment?</Label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    timeFormat="h:mm aa"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMM d, yyyy h:mm aa"
                  />
                </FormGroup>
                
                <Button>Submit</Button>
                
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col sm="9">
          <Card>

          <CardHeader>Your Appointments</CardHeader>

          <CardBody>
            
          </CardBody>

          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default App;
