//Dependencies
import React, {Component} from "react";
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
import AppJumbotron from "./../AppJumbotron";
import ApptCard from "./../ApptCard";

class AppPage extends Component {
    state = {
      startDate: new Date(),
      description: "",
      location: "",
      apptList: []
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleDateChange = date => {
      this.setState({
        startDate: date
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      let key = uuid();
      store.set(key, {
        key: key,
        description: this.state.description,
        location: this.state.location,
        startDate: this.state.startDate
      })
    }

    componentDidMount() {
      this.loadAppts();
    };

    loadAppts() {
      let data = [];
      store.each(function(key, value) {
        console.log(key, value);
      })
      // this.setState({apptList: data});
      };

    render() {
      return (
        <Container fluid>
    
          <AppJumbotron />
    
          <Row>
    
            <Col sm="3">
              <Card>
                
                <CardHeader>Create New Appointment</CardHeader>
                
                <CardBody>
                  <Form>
    
                    <FormGroup>
                      <Label for="descriptionInput">What is the appointment?</Label>
                      <Input 
                        type="text" 
                        name="description" 
                        id="descriptionInput"
                        onChange={this.handleInputChange} 
                        value={this.state.description} 
                        placeholder="Describe Your Appointment" />
                    </FormGroup>
    
                    <FormGroup>
                      <Label for="LocationInput">Where is your appointment?</Label>
                      <Input 
                        type="text" 
                        name="location" 
                        id="locationInput"
                        onChange={this.handleInputChange} 
                        value={this.state.location} 
                        placeholder="Appointment Location" />
                    </FormGroup>
    
                    <FormGroup>
                      <Label for="datetimeInput">When is your appointment?</Label>
                      <br />
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        showTimeSelect
                        timeFormat="h:mm aa"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMM d, yyyy h:mm aa"
                      />
                    </FormGroup>
                    
                    <Button
                    onClick={this.handleFormSubmit}
                    >Submit</Button>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
    
            <Col sm="9">
              <Card>
    
              <CardHeader>Your Appointments</CardHeader>
    
              <CardBody>
                {this.state.apptList.length
                 ? (
                   <div>
                     {this.state.apptList.map(appt => (
                       <ApptCard 
                          key={appt.key}
                          description={appt.description}
                          location={appt.location}
                          startDate={appt.startDate}
                       />
                     ))}
                   </div>
                 )
                : (<p>You have no appointments.</p>)
              }
              </CardBody>
    
              </Card>
            </Col>
    
          </Row>
    
        </Container>
      );
    }
}

export default AppPage;