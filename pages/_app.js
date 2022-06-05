import '../styles/globals.css';
import React, { useState, useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
