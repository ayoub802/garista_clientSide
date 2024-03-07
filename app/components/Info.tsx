import React from 'react';
import Image from 'next/image';

import rest from './../../public/photo/rest.jpg'
import './Info.css'

function Info() {
  return (
    <>

      <div className="container pt-0.5 px-4 m-0.5">
        <div className="flex flex-col items-center md:flex-row md:items-center w-full md:w-auto">
          <h2 className='text-zinc-400 font-bold  mb-2 md:mb-0 md:mr-4 name name-animation'>TITLE ...</h2>
          <div className="flex justify-center">
          <Image
  src={rest}
  alt=""
  width={600}
  height={400}
  className="h-44 w-[22rem] object-cover rounded-xl"
/>
          </div>
          <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nostrum. Unde rem tempora, repellat corrupti est doloremque animi aperiam qui iusto cum sequi dolores rerum</p>

          <div className='md:max-w-3xl grid menu-item gap-4 bg-cover relative' style={{ gridTemplateColumns: '.55fr 1fr' }}>
            <img src='https://toraexperience.com/wp-content/uploads/2022/11/tora_thehandrich_nuelpuig_191-1.png' className="h-[16rem] w-[14rem] object-cover rounded-xl bg-cover " alt="first" />
            <div className="relative">
              <h3 className='name name-animation'>Chef José Ouna</h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed debitis tempore explicabo
              <img src='https://toraexperience.com/wp-content/uploads/2022/11/tora_thehandrich_nuelpuig_81-1.png' className='h-[6rem] w-[8rem] object-cover rounded-xl bg-cover pt-2' alt="second" style={{ position: 'absolute', bottom: 0, right: 0 }} />
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="text-center py-4 bg-gray-900 text-white">
        <ul className="flex justify-center">
          <li className="mr-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </footer> */}
    </>
  );
}

export default Info;
