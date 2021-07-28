import React,{useState, useEffect} from 'react';
import Nav from "./Nav"
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';

import { Button,
  Alert,
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
 
  const submitButton = (e)=>{
    e.preventDefault();
    if (!cCode || !cCore ||!cTitle || !level)
     return document.querySelector('#wa-alert').style.visibility = 'visible',
     setTimeout(() => { document.querySelector('#wa-alert').style.visibility = 'hidden'
    }, 3000);
    
     Axios.post('http://localhost:9000/api/insert-course', {
       cCode:cCode, 
       cTitle: cTitle,
       cCore:cCore,
       level: level
      }).then(_result=>{
        setCourseList(
          [...courseList, {cCode:cCode, cTitle:cTitle, cCore:cCore, level:level }])
          document.querySelector('#success-alert').style.visibility = 'visible'
          setTimeout(() => {
            document.querySelector('#success-alert').style.visibility = 'hidden'
          }, 3000);
      }).catch(err=>{
        if (err.response.data.err.errno === 1062) {
          //show alert
          document.querySelector('#duplicate-alert').style.visibility = 'visible'
          setTimeout(() => {
            document.querySelector('#duplicate-alert').style.visibility = 'hidden'
          }, 3000);

        }
        console.log(err.response.data.err.errno);
      })
     
  };
 const assign =()=>{
    Axios.get('http://localhost:9000/api/assign-all-course')
      .then(res=>{
        document.querySelector('#success-alert').style.visibility = 'visible'
          setTimeout(() => {
            document.querySelector('#success-alert').style.visibility = 'hidden'
          }, 3000);
      })
      .catch(err=>{
        console.log(err);
      })
 }
 

  return (
    <div>
      <Nav/>
      <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
      <div id="success-alert" style={{visibility:'hidden'}}>
          <Alert color="success">
          Successfully Added to the Database !
          </Alert>
         </div>

    <div className="body">
    <div className="form">
    <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Course Code:</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="text" 
          name="cCode"
          required
          onChange={(e)=>{
         setcCode(e.target.value)
         e.preventDefault();
       }} 
     />
      
      </InputGroup>
      {" "}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Course Title:</InputGroupText>
        </InputGroupAddon>
        <Input required="true"
        className="input" 
        type="text" 
         name="cTitle" 
         size="" 
         onChange={(e)=>{
      setcTitle(e.target.value)
      e.preventDefault();

    }} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Core:</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="number" min="1" max="3"
          name="reg"
          required
          onChange={(e)=>{
         setcCore(e.target.value)
         e.preventDefault();
       }} 
     />
       
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Level:</InputGroupText>
        </InputGroupAddon>
    <select  onChange={(e)=>{
         setLevel(e.target.value)
         e.preventDefault();
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
      ----------------------------------------------------------------------------
      <Button variant="contained" color="primary" onClick={assign} >Assigned Course To Lecturers</Button>
      
   {" "}
         
        
         <div id="duplicate-alert" style={{visibility:'hidden'}}>
         <Alert color="danger">
         Already have this record in Database !
      </Alert>
         </div>
         <div id="wa-alert" style={{visibility:'hidden'}}>
         <Alert color="danger">
        please Fill All input  !!!
      </Alert>
         </div>
      </div>
    
  
    </div>
  );
}

export default Course;
