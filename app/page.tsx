"use client"

import React from 'react';
import Link from 'next/link';
import Home from './Home/page'; 
import Info from './Info/page'; 
import NavBar from './NavBar/page'
import Modal from './MenuItem/Modal';
// import Modal from './MenuItem/Modal'


export default function Page() {
  
  return (
    <>
   
      <main>
        <Home /> 
        {/* <Modal/> */}
        {/* <Modal /> */}
      </main>
  {/* <Splash/> */}
    </>
  );
}
