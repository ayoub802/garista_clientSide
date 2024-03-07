"use client";
import {useState} from 'react';
// import { tabAchat } from '../constant/page';
import MenuItem from '../MenuItem/page';
import NavBar from '../NavBar/page'
import Tab from './../Tab/page';
import { SelectedItemProvider } from '../MenuItem/SelectedItemContext';
import { tabAchat } from '../constant/page';

function Page() {
    const [cartCount, setCartCount] =useState(tabAchat.length);

    return (
        <div  >
            {/* <NavBar/> */}
            {/* <SelectedItemProvider> */}
            <MenuItem type='burger' cartCount={cartCount} setCartCount={setCartCount} />
            {/* </SelectedItemProvider> */}
        </div>
        
    );
}

export default Page;

// import React from 'react'

// const Page = () => {
//   return (
//     <div>Page</div>
//   )
// }

// export default Page
