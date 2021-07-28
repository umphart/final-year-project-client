import React,{useState, useEffect} from 'react';
import Nav from "./Nav"

import { Button,
    Table,
    InputGroup, 
    InputGroupText, 
    InputGroupAddon,
     Input, Alert } from 'reactstrap';
     import Axios from 'axios';
 function Lecture (){
  const [name, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [lecturerList, setLecturerList] = useState([]);
  
  useEffect(()=>{
    Axios.get('http://localhost:9000/api/get-lecturers').then((response)=>{
      setLecturerList(response.data.result)
    })
  },[])

  const submitButton = (e)=>{
    e.preventDefault();
    if (!name || !email || !dept) return document.querySelector('#wa-alert').style.visibility = 'visible',
    setTimeout(() => { document.querySelector('#wa-alert').style.visibility = 'hidden'
   }, 3000);
     Axios.post('http://localhost:9000/api/insert-lecturers', {
       name: name, 
       email: email,
       dept:dept,
      }).then(result=>{
        setLecturerList(
          [...lecturerList, {name:name, email:email, dept:dept}])
          document.querySelector('#success-alert').style.visibility = 'visible'
          setTimeout(() => {
            document.querySelector('#success-alert').style.visibility = 'hidden'
          }, 3000);
      
      })
      .catch(err=>{
        if (err.response.data.err.errno === 1062) {
            //show alert
          document.querySelector('#duplicate-alert').style.visibility = 'visible'
          setTimeout(() => {
            document.querySelector('#duplicate-alert').style.visibility = 'hidden'
          }, 3000);

        }
        
      })
      e.preventDefault();
  };
 const deleteLecturer =(id)=>{
    Axios.delete(`http://localhost:9000/api/delete-lect/${id}`)
      setLecturerList(lecturerList.filter((val)=>{
        return val.id !== id
      }))
 }
  
        return(
            <div>
                <Nav/>
                {/* <div id="success-alert" style={{visibility:'hidden'}}>
         <Alert color="success">
        This Course is Successfully Added to the Database !
      </Alert>
         </div> */}
                <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
                {/* <div id="wa-alert" style={{visibility:'hidden'}}>
         <Alert color="danger">
        please Fill All input  !!!
      </Alert>
         </div> */}

      <div className="body">
     <div className="form">
  
     <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Name:</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="text" 
          name="name"
          required
          onChange={(e)=>{
            setFullname(e.target.value)
            e.preventDefault();
          }} 
     />
      
      </InputGroup>
      {" "}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Email Address:</InputGroupText>
        </InputGroupAddon>
        <Input required="true"
        className="input" 
        type="mail" 
         name="email" 
         size=""
         onChange={(e)=>{
          setEmail(e.target.value)
          e.preventDefault();
        }}  
         
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Department</InputGroupText>
        </InputGroupAddon>
    <select  onChange={(e)=>{
         setDept(e.target.value)
         e.preventDefault();
       }} >
        <option selected>----</option>
       <option value="Computer Science">Computer Science</option>
       <option value="Information Tech">Information Technology</option>
       <option  value="Software Engr">Software Engneering</option>
       <option value="Cyber Security">Cyber Security</option>
    </select>
     
       
      </InputGroup>
      </div>
      {" "}
      <Button variant="contained" color="primary" onClick={submitButton} >Add lecturer</Button>
   {" "}
         <div id="success-alert" style={{visibility:'hidden'}}>
         <Alert color="success">
         Successfully Added to the Database !
      </Alert>
         </div> 
         <Table striped border="0">
        <tr>
          <th width="350">Lecturer Name</th>
          <th width="650">Email</th>
          <th width="250">Department</th>
          <th width="120">Remove</th>
        </tr>
          {lecturerList.map((val, index)=>( <tr key={index}>
            <td width="350">{val.name} </td>
          <td width="650">{val.email} </td>
          <td width="250">{val.dept}</td>
          <td width="120" scope="row"><Button color="danger" className="primary" onClick={
          () =>deleteLecturer(val.id)
          
          }>Delete</Button></td>
        </tr>
        ))} 
    </Table>
    </div>
    </div>
  );
}
export default Lecture;
