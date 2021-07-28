import React from 'react';
import {Link} from "react-router-dom"
import "../App.css"
import{Button} from "reactstrap"

function Nav() {
  
  return (
      <div>
          <nav>
          {/* <Link to="/">  <Button color="danger">Logout</Button></Link>  */}
              <div className="nav-link">
                  <Link to="/Course"> <Button id="btn" color="primary">Courses</Button> </Link>
                <Link to="/Lecture"><Button id="btn" color="primary"><li>Lecturers</li></Button> </Link>
                <Link to= "Department"><Button id="btn" color="primary"><li>Departments</li></Button> </Link>
                <Link to="/Levels"><Button  id="btn" color="primary"><li>Levels</li></Button> </Link>
                <Link to ="/Venue"><Button  id="btn" color="primary"><li>Veiw Allocation</li></Button>  </Link>
                <Link to="/">  <Button  id ="btn2"color="danger">Quit</Button></Link> 
                
               
            </div>
                 
           
          </nav>
      </div>
  )
}

export default Nav;