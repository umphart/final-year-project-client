import React from 'react';
import logo from "./loader.gif"
import { Button,
  Input, Spinner } from 'reactstrap';

function Loader() {
  // Import result is the URL of your image
  return (
   <div>
     <h2>
      <p>
      </p>
     </h2><p>

     </p><p>
       
     </p>
     <Spinner type="grow" color="primary"/>
     <Spinner type="grow" color="secondary"/>
     <Spinner type="grow" color="success"/>
     <Spinner type="grow" color="info"/>
     <Spinner type="grow" color="danger"/>
     <Spinner type="grow" color="warning"/>
     <Spinner type="grow" color="dark"/>
     
   </div>
  )

}
export default Loader;