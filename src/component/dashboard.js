import React from 'react';
import Nav from "./Nav"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./Course"
import Venue from "./venue"
import {Row, Col} from "reactstrap"
import RightDash from "./Rightdash"
import LeftDash from "./Leftdash"
import Loader from "./Logos/loader"
import "../App.css"



function Dashboard() {
  return (
    <div>
<Nav/>


      <Row>
        <Col sm="2">
       
        </Col>
        <Col xs="2" sm="8"className="centerItems">  <Loader/></Col>
        <Col sm="2"></Col>
      </Row>
 
    </div>

      );
}
export default Dashboard;