import { useState } from "react";


import GlowEffect from "../GlowEffect";
import Star from '../Star';
import Footer from "./Footer";


function ContactPhoneSize() {
    const [team,setTeam] = useState('');
    const [topic,setTopic] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    return (
        <div className="contactPhoneSize">
            <Star top={5} left={17} />

            <Star bottom={6} right={-1.8} />


            <div className="icon_group1">
              <img src="/close.png" alt=""></img>
            </div>

            <div className="QandA">
                <div>Questions or need</div>
                <div>assistance?</div>
                <div>Let us know about it</div>
            </div>

            <p className="mailUs_text">
                Email us below to any question related 
                to our event
            </p>

            <form className="contact_form">
                <input type="text" className="contact_sm" placeholder="Team's Name" value={team} onChange={(e) => setTeam(e.target.value)}/>
                <input type="text" className="contact_sm" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                <input type="text" className="contact_sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className="textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className="btn_contact">Submit</button>            
            </form>
                <Footer/>
                <GlowEffect top ={3} left={0} />
        </div>
    )
}

export default ContactPhoneSize;