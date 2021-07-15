import React from 'react';
import logo from "./loader.gif"

function Loader() {
  // Import result is the URL of your image
  return <img  style={{
    resizeMode: "cover",
    height: 150,
    width: 350,
    
    
}}
 src={logo} alt="" />;
}

export default Loader;