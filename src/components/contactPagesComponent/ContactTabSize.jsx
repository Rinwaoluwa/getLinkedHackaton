import { useState } from 'react'
import { Link } from 'react-router-dom';


import Button from "../Button";
import Footer from "./Footer";
import GlowEffect from "../GlowEffect";
import Loader from '../Loader';
import Error from '../Error';
import ParticleContainer from '../ParticleContainer';

import styles from './ContactPage.module.css'


function ContactTabSize() {

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

    async function handleSubmit(e) {
        e.preventDefault();

        if(!firstName || !email || !phoneNumber || !message) {
            setErrorMessage('Please fill all fields');
            console.log(errorMessage)
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

            // IF DATA CANNOT BE FETCHED 
            if (!request.ok) {
                const errorResponseData = await request.json();
                // setErrorMessage(errorResponseData.message);
                throw new Error(errorResponseData.message);
            }

            const responseData = await request.json();


            console.log(responseData)
        }catch (error) {
            console.log(error);
            throw new Error(error.message)
        }finally {
            setFirstName('');
            setPhoneNumber('');
            setEmail('');
            setMessage('');
            setIsLoading(e => !e);
        }
    }

    return (
        <div className={`${styles.contactTabSize} ${styles.body}`}>
            <GlowEffect bottom={0} right={3}/>
            <ParticleContainer /> {/*For the floating star effect*/}
          
            <header className={styles.header}>
                
                <Link to='/'>
                    <h2 className={styles['linked']}>get<span className={styles['linked_s']}>linked</span></h2>
                </Link>
                <ul className={styles.item}>
                    <li className={styles.list}>Timeline</li>
                    <li className={styles.list}>Overview</li>
                    <li className={styles.list}>FAQs</li>
                    <li className={styles.list}>Contact Us</li>                        
                </ul>
                <Button text='Register' />
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
