import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom"
import Nav from "./Nav"




const Landing = (props) => {
  return (
    <div>
         
      <Jumbotron>
        <h1 className="display-3">WELCOME!   <b> BUK FCSIT.</b></h1>
        <p className="lead">This is a Design and Implementation of Automated Course Allocation And Venue Assignment for 
        Faculty of computer Science And Informatin Technology. Bayero University Kano  
       </p>
        <hr className="my-2" />
        <p>It uses to eliminate Manual Course Allocation for Lecturers whithin the Faculty.</p>
        <p className="lead">
        
       
        <Link to="/Dashboard"> <Button color="primary">Get Start</Button> </Link>
      
         
        </p>
      </Jumbotron>
      

    </div>
  );
};

export default Landing;