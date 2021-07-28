import React from 'react';
import Nav from "./Nav"
import {Row, Col} from "reactstrap"
import Loader from "./Logos/loader"
import "../App.css"
function Dashboard() {
  return (
    <div>
<Nav/>
      <Row>
        <Col sm="2">
       
        </Col>
        <Col xs="2" sm="8"className="centerItems"> <Loader/></Col>
        <Col sm="2"></Col>
      </Row>
 
    </div>

      );
}
export default Dashboard;