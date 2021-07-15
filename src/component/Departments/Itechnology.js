import React,{useState, useEffect} from 'react';
import Department from "./Departments"
import Axios from 'axios';
import { Button,Table, } from 'reactstrap';
import StatusCheck1 from './statusCheck';

function Itechnology() {
  
    const [lecturerList, setLecturerList] = useState([]);
    
    useEffect(()=>{
      Axios.get('http://localhost:9000/api/get-dept-it').then((response)=>{
        setLecturerList(response.data.result)
      })
    },[])
  
  return <div>
      <Department/>
      
     
 <h1>INFORMATION TECHNOLOGY</h1>
 <div className="body">
 <Table>
        <tr>
          <th width="350">Lecturer Name</th>
          <th width="350">Email</th>
          <th width="200">Department</th>
          <th width="200">Status</th>
        </tr>
    </Table>
   
    {" "}
    {lecturerList.map((val, i)=>{
      return(
        <div className="card">
     
    
     <Table>
        
        <tr key={i}>
          
          <td width="350">{val.name} </td>
          <td width="350">{val.email} </td>
          <td width="200">{val.dept}</td>
          <td width="200" scope="row"><Button color="primary">Check Status</Button></td>
          
        </tr>
   
    </Table>
    
    </div>
     );
    })}
    </div>
    </div>
}
   

export default Itechnology;