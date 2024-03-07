"use client";
import { useState, useEffect } from 'react';
import { tabAchat } from '../constant/page';
// import burger1 from './../photo/berger1.jpg';
import Tab from './Tab';
import { Data } from '../constant/page';
import Link from 'next/link';
import './MenuItem.css'
import Modal from '../MenuItem/Modal';

const MenuItem = ({ type ,cartCount,setCartCount }) => {
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [newtab, setNewtab] = useState(tabAchat);
  const [quantities, setQuantities] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    switch (type) {
      case 'burger':
        setData(Data.Burgers);
        break;
      case 'donuts':
        setData(Data.Donuts);
        break;
      case 'pizza':
        setData(Data.Pizza);
        break;
      case 'sandwich':
        setData(Data.Sandwich);
        break;
      default:
        setData([]);
    }
  }, [type]);

  const listAchat = (id, type) => {
    setNewtab((prevTab) => [...prevTab, data[id - 1]]);
    setCartCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    tabAchat.length = 0;
    tabAchat.push(...newtab);
  }, [newtab]);

  const handleToggle = () => {
    setIsValid(!isValid);
  };

  // Fonction pour ouvrir ou fermer le modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
};
const selectItem = (item) => {
  setSelectedItem(item);
  toggleModal(); // Ouvre le modal
};
  console.log(isModalOpen)
  
  return (
    <>
      <Tab />
      <div className="flex justify-center items-center pt-2">
        <svg className="w-8 h-8 fill-[#8e8e8e] mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"></path>
        </svg>

        <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
          <input 
            id="switch-component" 
            type="checkbox" 
            value={isValid}
            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-500 peer-checked:border-gray-500 peer-checked:before:bg-gray-500" 
            checked={isValid}
            onChange={handleToggle} 
          />
          <label 
            htmlFor="switch-component" 
            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
          >
            <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" data-ripple-dark="true"></div>
          </label>
        </div>

        <svg className="w-8 h-8 fill-[#8e8e8e] ml-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
         

        <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z"></path>

        </svg>        
      </div>
      {isValid?(<div className="content-container">
        <div className="container m-0.5">
          <div className="flex flex-col">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-4">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
              <hr className="border-t-2 w-full bg-white" />
            </div>
            {data.map((item) => (
              <div key={item.id} className="w-full">
                <button onClick={() => {toggleModal(),selectItem(item)}} type="button">
                <div className='md:max-w-3xl grid menu-item gap-4 items-center' style={{gridTemplateColumns: '.55fr 1fr'}}>
                
                  <div className="md:h-auto overflow-hidden flex justify-center py-2">
                    <img src={item.image} className="max-h-40 w-auto bg-cover rounded-3xl" alt="burger" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm">{item.title}</h3>
                    <p className="text-[.6rem] md:text-base text-neutral-300 ">
                      {item.description.length < 120 ? item.description : item.description.slice(0, 120) + '...'}
                    </p>
                    
                    <div className="flex justify-between text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 pt-1">
                      <p className='mb-0.5 text-sm text-neutral-300'>{item.price}</p>
                      <button
    type="button"
    onClick={() => listAchat(item.id, item.type)}
    className="rounded-[1rem] text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium text-xs md:text-sm text-center flex items-center gap-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800 "
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            fillRule="evenodd"
            d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"
        />
        <path
            fillRule="evenodd"
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
    </svg>
    ADD
</button>


                    </div>


                  </div>
                  
                </div>
                </button>
                <Modal/>

                <hr className="w-full bg-white" />
              </div>
            ))}
            
          </div>
        </div>
      </div>):(
   <div className="content-container">
   <div className="container m-0.5">
     <div className="flex flex-col">
       <div className="flex items-center">
         <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-4">
           {type.charAt(0).toUpperCase() + type.slice(1)}
         </h1>
         <hr className="border-t-2 w-full bg-white" />
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {data.map((item) => (
           <div key={item.id} className="w-full">
             <div className="md:max-w-3xl grid menu-item gap-4 items-center">
               <div className="h-52 overflow-hidden flex justify-center"> {/* Ajustement de la hauteur */}
                 <img src={item.image} className="w-[21rem] bg-cover rounded-3xl" alt="burger" /> {/* Ajustement de la largeur */}
               </div>
               <div className="flex flex-col justify-center px-7">
                 <h3 className="text-sm">{item.title}</h3>
                 <p className="text-[.7rem] md:text-base text-slate-400">
                   {item.description.length < 120 ? item.description : item.description.slice(0, 120) + '...'}
                 </p>
                 <div className="flex justify-between text-xs md:text-sm lg:text-base xl:text-lg text-gray-600">
                   <p className="mb-0.5 text-sm">{item.price}</p>
                   <button
                     type="button"
                     onClick={() => listAchat(item.id)}
                     className="rounded-[1rem] text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium py-0.5 text-xs md:text-sm px-3 text-center flex items-center me-1.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                   >
                     <svg
                       className="w-3 h-3 me-1 bi bi-bag-heart-fill"
                       xmlns="http://www.w3.org/2000/svg"
                       width="14"
                       height="14"
                       fill="currentColor"
                       
                       viewBox="0 0 16 16"
                     >
                       <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                     </svg>
                     ADD
                   </button>
                 </div>
               </div>
             </div>
             <hr className="w-full bg-white" />
           </div>
         ))}
       </div>
     </div>
   </div>
 </div>
 
  
)} 
     

    
    </>
  );
}

export default MenuItem;
