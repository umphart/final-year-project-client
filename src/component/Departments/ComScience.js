import React,{useState, useEffect} from 'react';
import Department from "./Departments"
import Axios from 'axios';
import { Button,Table, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
function ComScience(props) {
  
    const [lecturerList, setLecturerList] = useState([]);
    const [courseList, setCourseList] = useState([]);
    useEffect(()=>{
      Axios.get('http://localhost:9000/api/get-dept-comp').then((response)=>{
        setLecturerList(response.data.result)
      })
    },[])
    const getLec =(id)=>{
    // console.log('clicked', id);
      Axios.get(`http://localhost:9000/api/get-assigned-course/${id}`)
        .then(res=>{
        setCourseList(res.data.result)
        toggle()
       
        })
        .catch(err=>{
        //  console.log(err);
        })
   }

   const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  return <div>
     <div>
    {/* <Button color="primary" onClick={toggle}>Check Status</Button> */}
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Assigned Courses</ModalHeader>
      <ModalBody> {" "}
  {/* {lecturerList.map((item,j)=>{
    return(
      <div key={j}>
        {item.id.name}
      </div>
    )
  })} */}
     
     {courseList.map((val,i)=>{
       return(
         <div key={i}>
           
          {val.cCode} {" "} {val.cTitle}
         </div>
       )
     })}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Close</Button>{' '}
        
      </ModalFooter>
    </Modal>
  </div>
      <Department/>
 <h1>COMPUTER SCIENCE</h1>
 <div className="body">
 <Table striped border="0">
        <tr>
        <th width="350">Lecturer Name</th>
          <th width="350">Email</th>
          <th width="200">Department</th>
          <th width="200">Status</th>
        </tr>
          {lecturerList.map((val, index)=>( <tr key={index}>
           
            <td width="350">{val.name} </td>
          <td width="350">{val.email} </td>
          <td width="200">{val.dept}</td>
          <td width="200" scope="row"><Button color="primary" onClick={()=>getLec(val.id)}>Check Status</Button></td>
        </tr>
        ))} 
    </Table>

    </div>
    </div>
}
   

export default ComScience;