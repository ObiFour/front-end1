import React from 'react';
import { useState } from 'react';
import Navbar from './nav.js';
import data from '../mockDB.json';


let userObjectList = {
}

function userObject(inputs){
  let userObjectList = {...inputs}
  console.log(userObjectList)
  return
}

export default (properties) => {

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
    <section id="dynamicSection">
      <form onInput={event=>doInput(event)}>
        <label> First Name: </label> <input name="firstName" value={properties.firstName}/>

        <label> Email: </label> <input name="email" value={properties.email} />
        <label> Telephone: </label> <input name="telNumber" value={properties.telNumber} />
      </form>
      <button role="button" onClick={event=>userObject(inputs)}>Register</button>
      </section>

    <section id="staticSection">
    <fieldset class="display">
      <legend>Registered Buyers</legend>
      {data.buyers.map((details) =>{
        return (
          <div key={details.id}>
            <p>First name: {details.firstName}</p>
            <p>Surname: {details.secondName}</p>
            <p>Email: {details.email}</p>
            <p>Telephone: {details.telephone}</p>
            <hr></hr>
          </div>
          )
        })
      }
      </fieldset>
    </section>
  </div>
)
    }