import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



import GlowEffect from "../GlowEffect";
import Footer from "./Footer";
import ParticleContainer from "../ParticleContainer";
import CloseModalSVG from '../CloseModalSVG';
import Loader from '../Loader';
import Error from '../Error';


import styles from './ContactPage.module.css'
import Button from "../Button";

function ContactPhoneSize() {
    // USER INPUTS
    const [firstName,setFirstName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    
    // PASSING DATA TO BACKEND
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

                setErrorMessage(errorResponseData.message);
            }
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

    // CLEARING ERROR MESSAGE WITH TIMER
    useEffect(function() {
        const id = setInterval(function() {
            setErrorMessage('');
        }, 3000);

        return () => clearInterval(id);
    }, []);
    return (
        <div className={`${styles.contactPhoneSize} ${styles.body}`}>
            <GlowEffect top={10} left={9}/>
            <GlowEffect bottom={0} right={20}/>
        
            <Link to='/'>
            <div className={styles['icon_group1']}>
              <CloseModalSVG />
            </div>
            </Link>

            <div className={styles['QandA']}>
                <div>Questions or need</div>
                <div>assistance?</div>
                <div>Let us know about it</div>
            </div>

            <p className={styles['mailUs_text']}>
                Email us below to any question related 
                to our event
            </p>

            <form className={styles['contact_form']}>
                <input type="text" className={styles['contact_sm']} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" className={styles['contact_sm']} placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <input type="text" className={styles['contact_sm']} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className={styles['textarea']} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                
                { isLoading && <Loader />}
                {errorMessage && <Error error={errorMessage} />}
                
                <div className={styles['btn_contact']}>
                    <Button text='Submit' btnClick={handleSubmit}/>
                </div>           
            </form>
                <Footer/>
                <GlowEffect top ={3} left={0} />
                
        </div>
    )
}

export default ContactPhoneSize;