import React from 'react';
import Nav from "../Nav"
import{Button} from "reactstrap"
import {Link} from "react-router-dom"



export default class Department extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
                <Link to ="/ComScience"><Button  id="btn1"color="primary">Computer Science</Button>  </Link>
                <Link to="/CyberSecurity"><Button  id="btn1"color="primary">Cyber Security</Button> </Link>
               
                <Link to= "Itechnology">  <Button id="btn1"color="primary">Information Technology</Button> </Link>
                <Link to="/SoftwareEngr"><Button id="btn1" color="primary">Software Engneering</Button> </Link>
            </div>
        )
    }

    }