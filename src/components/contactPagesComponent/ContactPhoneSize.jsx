import { useState } from "react";
// import { Link } from 'react-router-dom';


import GlowEffect from "../GlowEffect";
import Footer from "./Footer";
import ParticleContainer from "../ParticleContainer";
import CloseModalSVG from '../CloseModalSVG'


import styles from './ContactPage.module.css'
import Button from "../Button";

function ContactPhoneSize() {
    // USER INPUT
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
        <div className={`${styles.contactPhoneSize} ${styles.body}`}>
            <GlowEffect bottom={0} right={3}/>


            <div className={styles['icon_group1']}>
              <CloseModalSVG />
            </div>

            <div className={styles['QandA']}>
                <div>Questions or need</div>
                <div>assistance?</div>
                <div>Let us know about it</div>
            </div>

            <ParticleContainer /> {/*For the floating star effect*/}
            <p className={styles['mailUs_text']}>
                Email us below to any question related 
                to our event
            </p>

            <form className={styles['contact_form']}>
                <input type="text" className={styles['contact_sm']} placeholder="Team's Name" value={team} onChange={(e) => setTeam(e.target.value)}/>
                <input type="text" className={styles['contact_sm']} placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                <input type="text" className={styles['contact_sm']} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className={styles['textarea']} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                
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