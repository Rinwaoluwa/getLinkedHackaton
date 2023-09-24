import { useState } from 'react'



import Button from "../Button";
// import Footer from "../";
import GlowEffect from "../GlowEffect";


function ContactTabSize() {
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
        <div className="contactTabSize">
            <GlowEffect bottom={0} right={3}/>
            <GlowEffect bottom={5} right={5}/>
          
            <header>
                
                <h2 className="linked">get<span className="linked_s">linked</span></h2>
                <ul className="item">
                    <li className="list">Timeline</li>
                    <li className="list">Overview</li>
                    <li className="list">FAQs</li>
                    <li className="list">Contact Us</li>                        
                </ul>
                <Button name="Register" style={{width:"120px",fontSize:"15px", marginLeft:"10px", height: '50px'}} />
            </header>

            <main className="main">
                <GlowEffect top={8} left={100} />
                <GlowEffect top={15} left={80} />
                <GlowEffect top={12} left={80} />
                
                 <div className="main-getTouch">
                    <h2 className="main-getIn">Get in touch</h2>
                    <div className="main-info">Contact<br/>Infotmation</div>
                    <div className="main-address">
                        <div>27,Alara street</div>
                        <div>Yaba 100012</div>
                        <div>Lagos State</div>
                    </div>
                    <div className="main-call">Call Us : 07067981819</div>
                    <div className="main-open">
                        <div>We are open from Monday-Friday</div>
                        <div>08:00am - 05:00pm</div>
                    </div>
                    {/* <Footer/> */}
                    
                    
                 </div>

                 <div className="main-QandA">
                     <div className="main_text">
                        <h3>Question or need assistance</h3>
                        <h3>Let us know about it</h3>
                     </div>
                     <form className="main_QandA_form">
                        <input className="contact_bg"/>
                        <input className="contact_bg"/>
                        <textarea className="textarea"></textarea>
                        <button style={{marginTop:"1rem", 
                            alignSelf:"center",
                            width:"9rem",
                            borderRadius:"4px",
                            padding:"10px",
                            border: 'none',
                            backgroundImage:'linear-gradient(to right,#903AFF,#D434FE,#FF26B9,#FE34B9 )',
                            color: '#fff',
                            fontSize: '1rem',
                        }}
                        onClick={handleSubmit}
                        >Submit</button>
                       
                     </form>
                     
                 </div>      
            </main>
            
        </div>
    )
}

export default ContactTabSize
