import React,{useState, useEffect} from 'react';
import Nav from './Nav'
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,
  Table,
  Spinner,
   } from 'reactstrap';
import Axios from 'axios';
 


function  Allocation(props) {
  
  // const [couses, setCourse] = useState([]);
  // const [lecturer, setLecturer] = useState([]);
  const [result, setResult] = useState([]);
 useEffect(()=>{
    Axios.get('http://localhost:9000/api/get-all').then((response)=>{

   
      setResult(response.data.getAll)
      
        // document.querySelector('#load').style.visibility = 'visible'
        // setTimeout(() => {
        //   document.querySelector('#load').style.visibility = 'hidden'
        // }, 3000);

    })
    
  },[])
 
 // console.log(JSON.stringify(result));
 const printDoc = ()=>{
   window.print()
 }
  return (
    <div >
      <Nav/>
      <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>
  
    <div className="body">
    <Button color="success" id="print" style={{visiblity:'hidden'}} onClick={printDoc}>Print Result</Button>
      <h4>Allocation Of Courses </h4>
      {/* <Spinner color="primary" id="load" style={{visibility:'hidden', alignItems:"center"}}/> */}
<Table>
     
<tr> 
 
  <td >lecturers   </td> 
 
</tr>
<ol>{result.map((l,c)=>(
   <div key={c}>
     <tr>
      
        <td  width="200"><li>{l.lecturer.name}</li></td>
       
       <td  width="400">Courses:
         <ol type="i">
          {l.courses.map((k)=>(
    <li>{k.cCode} {"\t "}{k.cTitle}</li>

))}
         </ol>
       </td>

     </tr>
   </div>
))}
</ol>
   </Table>    
      </div>
      </div>
    );
  }
  

export default Allocation;
