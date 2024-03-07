"use client";
import React ,{useState} from 'react'
import Link from 'next/link';
import './NavBar.css';
import { tabAchat } from '../constant/page';
function page() {
  const [cartCount, setCartCount] = useState(tabAchat.length);
  return (
    <div className="container pt-4 px-4 m-0.5">
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between">
    <div className="flex flex-row items-center w-full md:w-auto" style={{ justifyContent: 'space-between' }}>
      <h2 className='text-zinc-400 font-bold  mb-2 md:mb-0 md:mr-4'>Restaurant's Name</h2>
      <div className="flex flex-row items-center">
        <Link href="/Info" passHref>
          <div className="inline-block mr-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
            </svg>
          </div>
        </Link>
        <Link href="/Achat" className="inline-block" passHref>
                  <div className="cart">
                  <p id="cart-count" style={{ display: cartCount === 0 ? 'none' : 'block' }}>{cartCount}</p>
                    <svg className="w-[24px] h-[24px] fill-[#8e8e8e]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path>

</svg>
                  </div>
                </Link>
      </div>
    </div>
    <div className="flex flex-row items-center w-full md:w-auto" style={{ justifyContent: 'space-between' }}>
      <div className="text-white rounded-md text-lg font-medium mb-2 md:mb-0" aria-current="page">
        Categories
      </div>
      <Link href="/" className="nav-link" aria-current="page" passHref>
        <div className="text-white">See all</div>
      </Link>
    </div>
  </nav>
  </div>
  )
}

export default page