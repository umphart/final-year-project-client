import React from 'react';
import Nav from "./Nav"
import{Button} from "reactstrap"
import {Link} from "react-router-dom"



export default class Level extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
                <Link to ="/level-one"><Button  id="btn1"color="primary">LEVEL ... 100</Button>  </Link>
                <Link to="/level-two"><Button id="btn1" color="primary">LEVEL ...   200</Button> </Link>
                <Link to= "level-three">  <Button id="btn1" color="primary">LEVEL ...  300</Button> </Link>
                <Link to="/level-four"><Button id="btn1" color="primary">LEVEL ...  400</Button> </Link>
              
            </div>
        )
    }

    }