import React,{useState, useEffect} from 'react';
import Nav from './Nav'
//import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,
  Table,
  InputGroup, 
  InputGroupText, 
  InputGroupAddon,
   Input, } from 'reactstrap';
import Axios from 'axios';


function  Venue() {
  const [vName, setvName] = useState('');
  const [vCapacity, setvCapacity] = useState('');
  const [venueList, setVenueList] = useState([]);


  
 useEffect(()=>{
    Axios.get('http://localhost:9000/api/get-venue').then((response)=>{
      console.log(response);
      setVenueList(response.data.result)
    })
  },[])

  const submitButton = ()=>{
    if (!vName || !vCapacity) return
     Axios.post('http://localhost:9000/api/insert-venue', {
       vName:vName, 
       vCapacity: vCapacity,
      }).then(data=>{
        setVenueList(
          [...venueList, {vName:vName, vCapacity:vCapacity}]) 
      }).catch((err)=>{
       
        alert(err.response.data.sqlMessage)
      })
  };
  
 const deleteVenue =(id)=>{
  Axios.delete(`http://localhost:9000/api/delete-venue/${id}`)
      setVenueList(venueList.filter((val)=>{
        return val.id !== id
      }))
 }
 const allocateVenue =(id)=>{

  // Axios.delete(`http://localhost:9000/api/delete-venue/${id}`)
  //     setVenueList(venueList.filter((val)=>{
  //       return val.id !== id
  //     }))
 }
 

  return (
    <div >
      <Nav/>
      <h3>FACULTY OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h3>


    <div className="body">
    <div className="form">
    <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Venue Name</InputGroupText>
        </InputGroupAddon>
        <Input  className="input" type="text" 
          name="vName"
          required
          onChange={(e)=>{
         setvName(e.target.value)
       }} 
     />
      
      </InputGroup>
      {" "}
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Venue Capacity</InputGroupText>
        </InputGroupAddon>
        <Input 
        className="input" 
        type="number" 
         name="vCapacity" min="0"
         size="" 
         onChange={(e)=>{
      setvCapacity(e.target.value)

    }} required/>
      </InputGroup>
     
      
      </div>
      {" "}
      <Button variant="contained" color="primary" onClick={submitButton} >Add Venue</Button>
       {/* <input className="inpt" placeholder="Search Venue"/> */}
   {" "}
    
   
    
    <Table className="table">
    <tr>
          <th width="300">Venue Name</th>
          <th width="650">Venue Capacity</th>
          <th width="200">Allocate Venue</th>
          <th width="120">Delete</th>
        </tr>
    </Table>
    {" "}
     
    {venueList.map((val, i )=>{
      return(
        <div className="card" key={i}>
     
    
          <Table>
        
        <tr>
          <td width="300">{val.vName} </td>
          <td width="700">{val.vCapacity} </td>
          <td width="120"><Button color="secondary" className="primary" onClick={
          () =>allocateVenue(val.id)
          
          }>Allocate</Button></td>
          <td width="120"><Button color="danger" className="primary" onClick={
          () =>deleteVenue(val.id)
          
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
  

export default Venue;
