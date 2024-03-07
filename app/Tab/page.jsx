"use client";
import { useState } from 'react';
import Link from 'next/link';
import { menu } from './../constant/page';

const Tab = () => {
  // État pour suivre l'onglet actuellement sélectionné
  const [selectedTab, setSelectedTab] = useState(menu[0].id); // On initialise avec le premier onglet

  return (
    <div className="tabs-container overflow-x-auto  pl-4">
      <div className="flex gap-2">
        {menu.map((item) => (
          <div key={item.id} className="relative shadow-md rounded-xl inline-block">
            {/* Utilisation de Link pour créer des liens */}
            <Link href={item.url} className="no-underline" passHref>
              <div
                onClick={() => setSelectedTab(item.id)}
                className={`tab flex items-center justify-center h-9 pl-1.5 pr-2.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors ${
                  selectedTab === item.id ? 'bg-gray-400 text-white' : 'hover:bg-gray-400 hover:text-white'
                }`}
              >
                <img src={item.icon} alt="Menu Icon" className="max-w-12 mr-2 rounded-xl h-7" />
                <h2 className="text-[14px] mb-0">{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
