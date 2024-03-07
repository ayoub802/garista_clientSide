"use client";
import React ,{useState} from 'react';
import { tabAchat } from '../constant/page';
import MenuItem from '../MenuItem/page';
import NavBar from '../NavBar/page'
function Page() {
    const [cartCount, setCartCount] =useState(tabAchat.length);

    return (
        <div  >
            {/* <NavBar/> */}
            
            <MenuItem type='donuts' cartCount={cartCount} setCartCount={setCartCount} />
        </div>
        
    );
}

export default Page;
