"use client";
import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import Home from '../Home/page'
import page from './page'
// import logo from './../photo/logo.png';
import logo from '../../public/photo/logowhd1.png';

import plat from '../../public/photo/plat.png';
function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className='intro'>
        <h1 className="logo-header">
        <img src="/photo/logowhd1.png" className='rotate-and-enlarge-image' alt="Logo" />
        </h1>
        <footer>
        <img src="/photo/plat.png" alt='footer'/>
        </footer>
      </div>
    );
  } 
}

export default SplashScreen;
