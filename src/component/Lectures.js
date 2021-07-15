import React,{useState, useEffect} from 'react';
import Nav from "./Nav"
import StatusCheck from "./Departments/statusCheck"
import { Button,
    Table,
    InputGroup, 
    InputGroupText, 
    InputGroupAddon,
     Input, } from 'reactstrap';
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

  const submitButton = ()=>{
    if (!name || !email || !dept) return
     Axios.post('http://localhost:9000/api/insert-lecturers', {
       name: name, 
       email: email,
       dept:dept,
      }).then(result=>{
        setLecturerList(
          [...lecturerList, {name:name, email:email, dept:dept}])
      
      })
      .catch(err=>{
        console.log(err.response.data.err.sqlMessage);
      })
        
      
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
                <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
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
          }} 
     />
      
      </InputGroup>
      {" "}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Email Address</InputGroupText>
        </InputGroupAddon>
        <Input required="true"
        className="input" 
        type="mail" 
         name="email" 
         size=""
         onChange={(e)=>{
          setEmail(e.target.value)
        }}  
         
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Department</InputGroupText>
        </InputGroupAddon>
    <select  onChange={(e)=>{
         setDept(e.target.value)
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
      <input className="inpt" placeholder="Search Lecturer"/>
   {" "}
   
   <Table>
        <tr>
          <th width="350">Lecturer Name</th>
          <th width="650">Email</th>
          <th width="250">Department</th>
          <th width="120">Delete</th>
        </tr>
    </Table>
   
    {" "}
    {lecturerList.map((val)=>{
      return(
        <div className="card">
     
    
          <Table>
        
        <tr>
          
          <td width="350">{val.name} </td>
          <td width="650">{val.email} </td>
          <td width="250">{val.dept}</td>
          <td width="120" scope="row"><Button color="danger" className="primary" onClick={
          () =>deleteLecturer(val.id)
          
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
export default Lecture;
