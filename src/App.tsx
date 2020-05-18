import React from "react";
import { Row, Col } from "reactstrap";
import Calc from "./Components/Calc";



export default class App extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Row>
          <Col md="3">
          
          </Col>

          <Col md="9">
          <Calc />
          </Col>

          
        </Row>

       


      </div>
    );
  }
}

