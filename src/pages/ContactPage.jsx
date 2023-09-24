import { useEffect, useState } from 'react';

import ContactPhoneSize from "../components/contactPagesComponent/ContactPhoneSize";
import ContactTabSize from "../components/contactPagesComponent/ContactTabSize";


function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)

  function handleResize() {
    if(window.innerWidth < 701) setIsMobile(true);
    else setIsMobile(false);
  }

  useEffect(function () {

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      {isMobile ? <ContactPhoneSize/> : <ContactTabSize/>} 
    </>
  )
}

export default ContactPage;
