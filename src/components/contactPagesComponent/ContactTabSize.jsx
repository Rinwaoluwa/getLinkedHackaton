import { useState } from 'react'
import { Link } from 'react-router-dom';


import Button from "../Button";
import Footer from "./Footer";
import GlowEffect from "../GlowEffect";

import styles from './ContactPage.module.css'
import Stars from '../Stars';
import ParticleContainer from '../ParticleContainer';


function ContactTabSize() {

    // USER INPUTS --
    const [team,setTeam] = useState('');
    const [topic,setTopic] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    // PASSING DATA TO BACKEND
    const [isLoading, setIsLoading] = useState(false)

    const BASE_URL = 'https://backend.getlinked.ai';

    const body = {
        email: 'sample@eexample.com',
        phone_number: '0903322445533',
        team_name: 'Space Explore',
        group_size: 10,
        project_topic: 'Web server propagation',
        category: 1,
        privacy_poclicy_accepted: true,
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setIsLoading(true);

            const resquest = await fetch(`${BASE_URL}/hackathon/categories-list`, {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify(body),
            })

            const data = await resquest.json();
            if(!resquest) throw new Error();

            console.log(data)
        }catch (error) {
            throw new Error(error.message)
        }finally {
            setIsLoading(false)
        }
    }
    console.log(isLoading)

    return (
        <div className={`${styles.contactTabSize} ${styles.body}`}>
            <GlowEffect bottom={0} right={3}/>
          
            <header className={styles.header}>
                
            <ParticleContainer /> {/*For the floating star effect*/}
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
                        <input className={styles['contact_bg']} placeholder="Team's Name"/>
                        <input className={styles['contact_bg']} placeholder="Topic"/>
                        <input className={styles['contact_bg']} placeholder="Email"/>
                        <textarea className={styles['textarea']} placeholder="Message"></textarea>
                        
                        <Button text='Submit' btnClick={handleSubmit}/>
                       
                     </form>
                     
                 </div>      
            </main>
            
        </div>
    )
}

export default ContactTabSize
