"use client";
import React ,{useState} from 'react'
import Achat from './../components/Achat'
import {tabAchat} from '../constant/page'
// import NavBar from '../NavBar/page'
function page() {
    const [cartCount, setCartCount] = useState(tabAchat.length);

  return (
    <>
    {/* <NavBar/> */}
    <Achat cartCount={cartCount} setCartCount={setCartCount} />
    </>
    
  )
}

export default page