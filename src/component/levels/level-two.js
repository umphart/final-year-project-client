import React,{useState, useEffect} from 'react';
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Table, } from 'reactstrap';
import Axios from 'axios';
import Level from '../Levels';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
function LevelTwoCourse(props) {
  const [courseList, setcourseList] = useState([]);
  const [lecturerList, setLecturerList] = useState([]);
    useEffect(()=>{
      Axios.get('http://localhost:9000/api/get-levelTwoCourse').then((response)=>{
        console.log(response);
        setcourseList(response.data.result)
      })
    },[])

  
    const asignCourse = (id)=>{
      axios.get(`http://localhost:9000/api/get-assigned-lect/${id}`).then(res=>{
       //console.log(res.data.result);
         setLecturerList(res.data.result)
         toggle()
         console.log(res.data.result);
   
      }).catch(err=>{
        console.log(err.response);
      })
    }
           const deltCourse =(id)=>{
               Axios.delete(`http://localhost:9000/api/delete-course/${id}`)
                 setcourseList(courseList.filter((val)=>{
                   return val.id !== id
                 }))
            }
   
    const {
     className
   } = props;
   
   const [modal, setModal] = useState(false);
   
   const toggle = () => setModal(!modal);
   
   const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
   
     return (
       <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
         <ModalHeader toggle={toggle} close={closeBtn}>Assigned Lecturer </ModalHeader>
         <ModalBody> {" "}
         {lecturerList.map((val,i)=>{
          return(
            <div key={i}>
              
             {val.name}{  " from  "}{val.dept} {"Department"}
     
            </div>
          )
        })}
         </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={toggle}>Close</Button>{' '}
           
         </ModalFooter>
       </Modal>
        <Level/>
   
       <div className="body">
       <Table striped border="0">
        <tr>
          <th width="300">Course Code</th>
          <th width="380">Course Title</th>
          <th width="180">Core</th>
          <th width="150">Level</th>
          <th width="150">Lecturer</th>
          <th width="100">Delete</th>
        </tr>
          {courseList.map((val, index)=>( <tr key={index}>
           
          <td width="250" scope="row">{val.cCode} </td>
          <td width="380">{val.cTitle} </td>
          <td width="180">{val.cCore}</td>
          <td width="150">{val.level}</td>
          <td width="100" scope="row"><Button color="primary" className="primary" onClick={
          () =>asignCourse(val.lecturerid)
          
          }>Lecturer</Button></td>
            <td width="120" scope="row"><Button color="danger" className="primary" onClick={
          () =>deltCourse(val.id)
          }>Delete</Button></td>
        </tr>
        ))} 
    </Table>
       </div>
       </div>
     );
   }export default LevelTwoCourse;
