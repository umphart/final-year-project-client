import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'reactstrap';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:9000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    if(username != "FCSIT || fcsit" && password != "2020") return document.querySelector('#error').style.visibility = 'visible',
    setTimeout(() => { document.querySelector('#error').style.visibility = 'hidden'
   }, 3000);
    e.preventDefault();
    const token = await loginUser({
      username ,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <div id="error" style={{visibility:'hidden'}}>
      <Alert color="danger">
        Incorrect username or password
      </Alert>
         </div>
      <h1>ADMIN LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p></p>
          <input type="text" placeholder=" Username" onChange={e => setUserName(e.target.value)} required/>
        </label>
        <p>

        </p>
        <label>
          <p></p>
          <input type="password" placeholder=" password" onChange={e => setPassword(e.target.value)}required />
        </label>
        <div><p></p>
          <Button type="submit" color="primary">Login</Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};