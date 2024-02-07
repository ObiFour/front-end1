import React from 'react';
import Navbar from './nav.js';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <p>
        I am a footer
      </p>
    </footer>
    </>
  )
}

export default Layout;