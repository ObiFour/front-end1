import React from 'react';
import { useState } from 'react';
import Navbar from './nav.js';

let userObjectList = {
}

function userObject(inputs){
  let userObjectList = {...inputs}
  console.log(userObjectList)
  return
}

export default (properties) => {
let data = {
  name: "",
  email: "",
  telNumber: "",
};

let [inputs, setInputs] = useState({data});

function doInput(event){
  if(event.target.name){
    let newData = {...inputs}
    newData[event.target.name] = event.target.value;
    setInputs(newData);
  }
}
return (
  <div>
    <div class="display">
      <h1>{inputs.name}</h1>
      <h1>{inputs.email}</h1>
      <h1>{inputs.telNumber}</h1>
    </div>
    <form onInput={event=>doInput(event)}>
      <label>  Name: </label> <input name="name" value={properties.name}/>

      <label> Email: </label> <input name="email" value={properties.email} />
      <label> Telephone: </label> <input name="telNumber" value={properties.telNumber} />
    </form>
    <button onClick={event=>userObject(inputs)}>Register</button>
  </div>
)
}