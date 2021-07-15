import React,{useState, useEffect} from 'react';
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';

import { Button,
  Table,
  InputGroup, 
  InputGroupText, 
  InputGroupAddon,
   Input, } from 'reactstrap';
import Axios from 'axios';
import Level from '../Levels';
import axios from 'axios';

function LevelFourCourse() {

  const [courseList, setcourseList] = useState([]);

    
    useEffect(()=>{
      Axios.get('http://localhost:9000/api/get-levelFourCourse').then((response)=>{
        console.log(response);
        setcourseList(response.data.result)
      })
    },[])

  
 const asignCourse = (id)=>{
   axios.put(`http://localhost:9000/api/update-course/${id}`).then(data=>{
     if (data.status === 200) {
       return alert("course assigned already")
     }
     alert("course successfully assigned")

   }).catch(err=>{
     console.log(err.response);
   })
 }

 

  return (
    <div>
     <Level/>

    <div className="body">
   
    <Table>
        <tr>
          <th width="350">Course Code</th>
          <th width="400">Course Title</th>
          <th width="200"># Registered</th>
          <th width="220">Level</th>
          <th width="120">Assign</th>
        </tr>
    </Table>
   
    {" "}
    {courseList.map((val, i)=>{
      return(
        <div className="card">
     
    
          <Table height="50">
        
        <tr key={i} >
          
          <td width="350">{val.cCode} </td>
          <td width="400">{val.cTitle} </td>
          <td width="200">{val.cCore}</td>
          <td width="200">{val.level}</td>
          <td width="120" scope="row"><Button color="primary" className="primary" onClick={
          () =>asignCourse(val.id)
          
          }>Assign</Button></td>
          
          
          
        </tr>
   
    </Table>
      
       
      </div>
     );
    })}
    </div>
    </div>
    
  );
}

export default LevelFourCourse;
