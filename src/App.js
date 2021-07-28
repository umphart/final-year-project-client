import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Row, Col } from 'reactstrap';
import './App.css';
import Header from './component/Header';
import Landing from "./component/Landing"
import Course from "./component/Course"
import Venue  from "./component/venue"
import Nav    from './component/Nav'
import Dashboard from "./component/dashboard"
import Level from "./component/Levels"
import Lecture from "./component/Lectures"
import Department from "./component/Departments/Departments";
import RightDash from "./component/Rightdash"
import LeftDash from "./component/Leftdash";
import LevelOne from "./component/levels/level-one";
import LevelTwo from "./component/levels/level-two"
import LevelThree from "./component/levels/level-three"
import LevelFour from "./component/levels/level-four";
import ComScience from "./component/Departments/ComScience"
import SoftwareEngr from "./component/Departments/SoftwareEngr";
import CyberSecurity from "./component/Departments/CyberSecurity"
import Itechnology from "./component/Departments/Itechnology";
import Login from './component/login';
import useToken from './component/userToken';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

return (<div>
<Router> 
<div className="wrapper">
    <Header/>
    
     <Row>
<Col sm="2"><RightDash/></Col>
  <Col xs="1" sm="8">

    <Route path="/nav" component={Nav}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" exact component={Landing} />
    <Route path="/Course" component={Course}/>
    <Route path="/venue" component={Venue}/>
    <Route path="/Levels" component={Level}/>
    <Route path="/Department" component={Department}/>
    <Route path="/Lecture" component={Lecture}/>
    <Route path="/level-one" component={LevelOne}/>
    <Route path="/level-two" component={LevelTwo}/>
    <Route path="/level-three" component={LevelThree}/>
    <Route path="/level-four" component={LevelFour}/>
    <Route path="/ComScience" component={ComScience}/>
    <Route path="/CyberSecurity" component={CyberSecurity}/>
    <Route path="/Itechnology" component={Itechnology}/>
    <Route path="/SoftwareEngr" component={SoftwareEngr}/>
    
 </Col>
<Col sm="2"><LeftDash/></Col>
      </Row>

</div>
</Router>
     </div>
  );
}

export default App;
