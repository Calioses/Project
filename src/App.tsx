import React from "react";
import { Row, Col } from "reactstrap";
import ContactUsForm from "./Views/ContactUsForm";



export default class App extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Row>
          <Col md="3">
          
          </Col>

          <Col md="6">
          <ContactUsForm />
          </Col>

          <Col md="3">
          
          </Col>
        </Row>

       


      </div>
    );
  }
}

