
"use client"

import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/ui/button";
import { Credenza, CredenzaBody, CredenzaClose, CredenzaContent, CredenzaDescription, CredenzaFooter, CredenzaHeader, CredenzaTitle, CredenzaTrigger } from "@/components/ui/credenza";
import { Icons } from "@/components/icons";
import React, { useState } from 'react';
import MenuItem from './page';
import {tabAchat} from './../constant/page'
import Burgers from '../Burgers/page'
import useSelectedItem from './useSelectedItem';
import { SelectedItemContext } from './SelectedItemContext';


import { toggleVariants } from "@/components/ui/toggle";


function Modal() {
  // const { selectedItem } = useSelectedItem();
  const [cartCount, setCartCount] =useState(tabAchat.length);

  return (
    // <main className={`fixed inset-0 overflow-y-auto ${isModalOpen ? 'visible' : 'hidden'}`}>
    //   <div className="flex items-center justify-center min-h-screen p-4">
    //     <div className="container flex flex-col items-center gap-4 text-center">
    //       <Credenza isOpen={isModalOpen} onDismiss={toggleModal}>
    //         <CredenzaContent>
    //           <CredenzaHeader>
    //             <CredenzaTitle>Credenza</CredenzaTitle>
    //             <CredenzaDescription>A responsive modal component for your app.</CredenzaDescription>
    //           </CredenzaHeader>
    //           <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
    //             {/* {selectedItem && (
    //               // <p>You have selected: {selectedItem.title}</p>
    //             )} */}
    //           </CredenzaBody>
    //           <CredenzaFooter>
    //             <Button variant="outline" onClick={toggleModal}>Close</Button>
    //           </CredenzaFooter>
    //         </CredenzaContent>
    //       </Credenza>
    //     </div>
    //   </div>
    // </main>
    <Credenza>
    <CredenzaTrigger asChild>
      <Button>
        
      </Button>
    </CredenzaTrigger>
    <CredenzaContent>
      <CredenzaHeader>
        <CredenzaTitle>Credenza</CredenzaTitle>
        <CredenzaDescription>
          A responsive modal component for shadcn/ui.
        </CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
        <p>
          This component is built using shadcn/ui&apos;s dialog and
          drawer component, which is built on top of Vaul.
        </p>
        <p>
          It shows a{" "}

          for desktop view and a{" "}

          for mobile view.
        </p>
        <p>
          The documentation for installation and usage can be found on
          the{" "}

          .
        </p>
      </CredenzaBody>
      <CredenzaFooter>

        <CredenzaClose asChild>
          <Button variant="outline">Close</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  </Credenza>
  );
}

export default Modal;