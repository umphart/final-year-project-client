import React, {useState, useEffect} from 'react';
import Axios from "axios"
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function StatusCheck1(){
  const [courseList, setCourseList] = useState([])
  useEffect(()=>{
  Axios.get('http://localhost:9000/api/get-course-lvl1').then((response)=>{
    setCourseList(response.data)
  })
},[])
  return <div>
  <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
  Check Status
  </Button>
  <UncontrolledCollapse toggler="#toggler">
    <Card>
      <CardBody>
      <p>This Lecturer Was assigned to:</p>
      {courseList.map((val)=>{
      return(
        <div className="course">
      <h6>{val.cCode}</h6> 
    </div>
     );
    })}
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</div> 
};
  

  
  

export default StatusCheck1;