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
    </div>
     );
    })}
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</div> 
};
  

  
  

export default StatusCheck1;