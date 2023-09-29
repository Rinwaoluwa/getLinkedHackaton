import { useState } from 'react'
import { Link } from 'react-router-dom';


import Button from "../Button";
import Footer from "./Footer";
import GlowEffect from "../GlowEffect";
import Loader from '../Loader';
import Error from '../Error';

import styles from './ContactPage.module.css'


function ContactTabSize() {

    // HANDLE SCROLLINTOVIEW    
    function handlescrollIntoView(section) {
        document.querySelector(`#${section}`).scrollIntoView(
            {
                behavior: 'smooth',
            }
        )
    }

    // USER INPUTS --
    const [firstName,setFirstName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // PASSING DATA TO BACKEND

    const BASE_URL = 'https://backend.getlinked.ai';

    const data = {
        first_name: firstName,
        phone_number: phoneNumber,
        email: email,
        message: message,
    };

    // CLEARING ERROR MESSAGE WITH TIMER
    if(errorMessage) {
        setInterval(function() {
            setErrorMessage('');
        }, 5000)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // IF INPUTS ARE EMPTY CALL ERROR COMPONENT AND RETURN
        if(!firstName || !email || !phoneNumber || !message) {
            setErrorMessage('Please fill all fields');
            return;
        }        
        
        try {

            setIsLoading(true)

            const request = await fetch(`${BASE_URL}/hackathon/contact-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            console.log(await request.json())
            // IF DATA CANNOT BE FETCHED 
            if (!request.ok) {

                const errorResponseData = await request.json();

                setErrorMessage(errorResponseData.message);
            }


            // IF LOADING TAKES LONGER THEN 3MIN 
            setTimeout(function() {
                setIsLoading(false);
                console.log('Loading stopped')
                setErrorMessage('Something went wrong!')
            }, 1000 * 60 * 1);
            

        }catch (error) {
            if(error) setErrorMessage(error.message);
        }finally {
            setFirstName('');
            setPhoneNumber('');
            setEmail('');
            setMessage('');
            setIsLoading(e => !e);
        }
    }


    return (
        <div className={`${styles.contactTabSize}`}>
            <GlowEffect top={10} left={9}/>
            <GlowEffect bottom={10} right={9}/>
          
            <header className={styles.header}>
                
                <Link to='/'>
                    <h2 className={styles['linked']}>get<span className={styles['linked_s']}>linked</span></h2>
                </Link>
                <ul className={styles.item}>

                    <Link to='/'>
                        <li className={styles.list} onClick={() => handlescrollIntoView('timeline')}>Timeline</li>
                    </Link>

                    <Link to='/'>
                        <li className={styles.list}>Overview</li>
                    </Link>

                    <Link to='/'>
                        <li className={styles.list}>FAQs</li>
                    </Link>
                    
                    <li className={`${styles.list} active`}>Contact</li>                        
                </ul>
                

                <Link to='/register'>
                    <Button text='Register' />  
                </Link>
            </header>

            <main className={styles.main}>
                 <div className={styles['main-getTouch']}>
                    <h2 className={styles['main-getIn']}>Get in touch</h2>
                    <div className={styles['main-info']}>Contact<br/>Infotmation</div>
                    <div className={styles['main-address']}>
                        <div>27,Alara street</div>
                        <div>Yaba 100012</div>
                        <div>Lagos State</div>
                    </div>
                    <div className={styles['main-call']}>Call Us : 07067981819</div>
                    <div className={styles['main-open']}>
                        <div>We are open from Monday-Friday</div>
                        <div>08:00am - 05:00pm</div>
                    </div>
                    <Footer/>
                    
                    
                 </div>

                 <div className={styles['main-QandA']}>
                     <div className={styles['main_text']}>
                        <h3>Question or need assistance</h3>
                        <h3>Let us know about it</h3>
                     </div>
                     <form className={styles['main_QandA_form']}>
                        <input className={styles['contact_bg']} placeholder="First Name" 
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={isLoading || errorMessage}/>

                        <input className={styles['contact_bg']} placeholder="Phone Number" 
                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={isLoading || errorMessage}/>

                        <input className={styles['contact_bg']} placeholder="Email" 
                        value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading || errorMessage}/>

                        <textarea className={styles['textarea']} placeholder="Message" 
                        value={message} onChange={(e) => setMessage(e.target.value)} disabled={isLoading || errorMessage}></textarea>

                        <Button text='Submit' btnClick={handleSubmit}/>
                        { errorMessage && <Error error={errorMessage} />}
                        { isLoading && <Loader />}
                     </form>
                     
                 </div>      
            </main>
            
        </div>
    )
}

export default ContactTabSize
