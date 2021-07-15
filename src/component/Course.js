import React,{useState, useEffect} from 'react';
import Nav from "./Nav"
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';

import { Button,
  Table,
  InputGroup, 
  InputGroupText, 
  InputGroupAddon,
   Input, } from 'reactstrap';
import Axios from 'axios';

function Course() {
  const [cCode, setcCode] = useState('');
  const [cCore, setcCore] = useState('');
  const [cTitle, setcTitle] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [level, setLevel] = useState('');
  const [leveloneCourse, setlevelone] = useState([{'MTH1301':'Maths', 'CSC1311':'Probability', 'CSC1301':"Calculus"}]);
  const [levelTwoCourse, setleveltwo] = useState([{'MTH1301':'Maths', 'CSC1311':'Probability', 'CSC1301':"Calculus"}]);
  const [levelThreeCourse, setlevelthree] = useState([{'MTH1301':'Maths', 'CSC1311':'Probability', 'CSC1301':"Calculus"}]);
  const [levelFourCourse, setlevelfour] = useState([{'MTH1301':'Maths', 'CSC1311':'Probability', 'CSC1301':"Calculus"}]);
  

  useEffect(()=>{
    Axios.get('http://localhost:9000/api/get-course').then((response)=>{
      setCourseList(response.data.result)
    })
  },[])

  const submitButton = ()=>{
    if (!cCode || !cCore ||!cTitle || !level) return
     Axios.post('http://localhost:9000/api/insert-leveloneCourse', {
       cCode:cCode, 
       cTitle: cTitle,
       cCore:cCore,
       level: level
      }).then(_result=>{
        setCourseList(
          [...courseList, {cCode:cCode, cTitle:cTitle, cCore:cCore, level:level }])
      }).catch(err=>{
        console.log(err.response.data.err.sqlMessage);
      })
    
  };
 const deleteCourse =(id)=>{
    Axios.delete(`http://localhost:9000/api/delete-course/${id}`)
      setCourseList(courseList.filter((val)=>{
        return val.id !== id
      }))
 }
 

  return (
    <div>
      <Nav/>
      <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
   

    <div className="body">
    <div className="form">
    <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Course Code</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="text" 
          name="cCode"
          required
          onChange={(e)=>{
         setcCode(e.target.value)
       }} 
     />
      
      </InputGroup>
      {" "}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Course Title</InputGroupText>
        </InputGroupAddon>
        <Input required="true"
        className="input" 
        type="text" 
         name="cTitle" 
         size="" 
         onChange={(e)=>{
      setcTitle(e.target.value)

    }} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText># Registered</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="number" min="0"
          name="reg"
          required
          onChange={(e)=>{
         setcCore(e.target.value)
       }} 
     />
       
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Level</InputGroupText>
        </InputGroupAddon>
    <select  onChange={(e)=>{
         setLevel(e.target.value)
       }} >
        <option selected>----</option>
       <option value="Level 100">Level 100</option>
       <option value="Level 200">Level 200</option>
       <option  value="Level 300">Level 300</option>
       <option value="level 400">Level 400</option>
    </select>
     
       
      </InputGroup>
      </div>
      {" "}
      <Button variant="contained" color="primary" onClick={submitButton} >Add Course</Button>
      {/* <input className="inpt" placeholder="Search Course"/> */}
   {" "}
    
   <Table>
        <tr>
          <th width="300">Course Code</th>
          <th width="600">Course Title</th>
          <th width="200"># Register</th>
          <th width="150">Level</th>
          <th width="120">Delete</th>
        </tr>
    </Table>
   
    {" "}
    {courseList.map((val, i)=>{
      return(
        <div className="card" key={i}>
     
    
          <Table height="50">
        
        <tr>
          
          <td width="350">{val.cCode} </td>
          <td width="650">{val.cTitle} </td>
          <td width="250">{val.cCore}</td>
          <td width="250">{val.level}</td>
          
          <td width="120" scope="row"><Button color="danger" className="primary" onClick={
          () =>deleteCourse(val.id)
          
          }>Delete</Button></td>
          
        </tr>
   
    </Table>
        
       
      </div>
     );
    })}
        
       
      </div>
    
  
    </div>
  );
}

export default Course;
