import React from 'react';
import { useState } from 'react';
import Navbar from './nav.js';
import data from '../mockDB.json';

// let userObjectList = {
// }

// function userObject(inputs){
//   let userObjectList = {...inputs}
//   console.log(userObjectList)
//   return
// }
// function displaySellers() => 

export default (properties) => {


let [inputs, setInputs] = useState();

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
        <label>  Name: </label> <input name="name" value={properties.name}/>

        <label> Email: </label> <input name="email" value={properties.email} />
        <label> Telephone: </label> <input name="telNumber" value={properties.telNumber} />
      </form>
      <button>Register</button>      
    </section> 

    <section id="staticSection">
    <div class="display">
      <h1>Registered Sellers</h1>
      {data.sellers.map((details) =>{
        return (
          <div key={details.id}>
            <p>{details.firstName}</p>
            <p>{details.secondName}</p>
            <p>{details.email}</p>
            <p>{details.telephone}</p>
          </div>
          )
        })
      }
    </div>
    </section>
  </div>
)
}