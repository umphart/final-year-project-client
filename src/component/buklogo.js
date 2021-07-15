import React from 'react';
import logo from "../images/logo.jpg"

function Buklogo() {
  // Import result is the URL of your image
  return <img  style={{
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius:15
}}
 src={logo} alt="" />;
}

export default Buklogo;