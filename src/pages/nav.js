import logo from '../logo.svg';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src={logo}/>
      <li id="left">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sellerform">Register Seller</Link>
      </li>
     <li>
        <Link to="/buyerform">Register Buyer</Link>
      </li>
      <li>
        <Link to="/properties">Properties</Link>
      </li> 
    </nav>
  )
}

export default Navbar;