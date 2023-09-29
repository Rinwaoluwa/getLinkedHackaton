import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ContactPhoneSize from "../components/contactPagesComponent/ContactPhoneSize";
import ContactTabSize from "../components/contactPagesComponent/ContactTabSize";



function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useMediaQuery({query: '(max-width: 701px)'});

  useEffect(function () {

    windowSize && setIsMobile(true);

    !windowSize && setIsMobile(false);

  }, [windowSize])

  console.log(isMobile);
  return (
    <>
      {isMobile ? <ContactPhoneSize/> : <ContactTabSize/>} 
    </>
  )
}

export default ContactPage;
