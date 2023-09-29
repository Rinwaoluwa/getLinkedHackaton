import { useEffect, useState } from "react";


import Header from "../components/Sections/SectionHeader";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Error from "../components/Error";


import styles from './Registerpage.module.css'


const BASE_URL = 'https://backend.getlinked.ai';

function Register() {
const [categories,setCategories] = useState([]);

const [teamR,setTeamR] = useState("");
const [topicR,setTopicR] = useState("");
const [emailR,setEmailR] = useState("");
const [phoneR,setPhoneR] = useState("");
const [pickedCatergory,setPickedCatergory] = useState("");
const [group,setGroup] = useState("");
const [isChecked, setIsChecked] = useState(false)


const [isLoading,setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


const data =  {
    email: emailR,
    phone_numer: phoneR,
    team_name: teamR,  
    group_size: group,
    project_topic: topicR,
    category: pickedCatergory,
    privacy_poclicy_accepted: isChecked,   
}

// POST USER DATA 
async function postUserData(e) {
    e.preventDefault()

    const controller = new AbortController();
    
    // console.log(teamR, topicR, emailR, phoneR, pickedCatergory, group, isChecked);
    try {
        
        if(!teamR || !topicR || !emailR || !phoneR || !pickedCatergory || !group) {
            throw new Error("Please fill all fields");
        }

        setIsLoading(true);

  
        const resquest = await fetch(`${BASE_URL}//hackathon/registration`, {
            signal: controller.abort(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        })

        //  IF THE REQUEST CAN'T BE FETCHED --- E.G NO CONNECTION TO INTERNET OR SOMETHING
        if(!resquest.ok) throw new Error();
        
        const datareq = await resquest.json();

        // IF LOADING TAKES LONGER THEN 3MIN 
        setTimeout(function() {
            setIsLoading(false);
            throw new Error('Something went wrong!')
        }, 1000 * 60 * 5)   


        console.log(datareq)
        return data
    }catch (error) {
        setErrorMessage(error.message)
        console.error(error.message);
    }finally {
        setIsLoading(false)
        setTeamR('')
        setTopicR('')
        setEmailR('')
        setPhoneR('')
        setPickedCatergory('')
        setGroup('')
        setErrorMessage('')
        setIsChecked(false)
        controller.abort();
    }
}


// GET CATEGORIES
useEffect(function(){
    async function getCategories(){
        try{

            const req = await fetch(`${BASE_URL}/hackathon/categories-list`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if(!req.ok) setErrorMessage("something went wrong!")
        
            const data = await req.json();
            setCategories(data);
    
        }catch(error){

            setErrorMessage(error.message)
            console.log(error.message)
        }

    }
    getCategories();
},[]);


    return (
        <div className={styles.register}>

            <Header />

            <div className={styles.register_main}>    
                
                <div className={styles.reg_img}>
                    <img src="/image/person-sitting.png" className={styles.imag} alt="walk"></img>
                </div>
                
                <div className={styles.reg_container}>
                    <form className={styles.reg_form}>      
                        <p className={styles.reg_text}>Register</p>
                        <p className={styles.part}>Be part of this movement!  </p>
                        <h3 className={styles.create_acc}>CREATE YOUR ACCOUNT</h3>
                        <div className={`${styles.form} ${styles.form_input}`}>

                            <span className={styles.input_container}>
                                <label htmlFor="Team Name">{`Team's Name`}</label>
                                <input type="text" name="Team Name" className={styles.user_input} 
                                    placeholder='Enter name of group' value={teamR} 
                                    onChange={(e) => setTeamR(e.target.value)}
                                />
                            </span>

                            <span className={styles.input_container}>
                                <label htmlFor="Phone Number">Phone Number</label>
                                <input type="tel" name="Phone Number" className={styles.user_input} 
                                    value={phoneR} onChange={(e) => setPhoneR(e.target.value)}
                                    placeholder='Enter your phone number'
                                />
                            </span>
                        </div>


                        <div className={`${styles.form} ${styles.form_input}`}>
                            <span className={styles.input_container}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="user email" className={styles.user_input} 
                                    value={emailR} onChange={(e) => setEmailR(e.target.value)}
                                    placeholder='Enter your email address'
                                />
                            </span>

                            <span className={styles.input_container}>
                                <label htmlFor="Project topic">Project Topic</label>
                                <input type="text" name="user project topic" className={styles.user_input} 
                                    value={topicR} onChange={(e) => setTopicR(e.target.value)}
                                    placeholder="What is your project topic"
                                />
                            </span>
                        </div>



                        <div className={`${styles.form} ${styles.select_input}`}>
                            <div className={styles.select_container}>
                                <div className={styles.select_text}>Category</div>
                                <select value={pickedCatergory} onChange={(e) => {
                                    console.log(pickedCatergory)
                                    setPickedCatergory(e.target.value)
                                }}
                                    className={styles.select}
                                >
                                    <option>Select your catergory</option>
                                    {categories && categories.map((value, i)=><option 
                                        key={value.name} value={i}>{value.name}</option>)
                                    }
                                </select>
                            </div>
                           
                            <div className={styles.select_container}>
                                <div className={styles.select_text}>Group size</div>
                                <select value={group} onChange={(e) => setGroup(e.target.value)}
                                    className={styles.select}
                                >
                                    <option value={"0-5"}>0-5</option>
                                    <option value={"10-15"}>10-15</option>
                                    <option value={"15-20"}>15-20</option>
                                </select>
                            </div>
                        </div>


                        <div className={styles.review}>
                            Please review your registration details before submitting
                        </div>

                        <div className={styles.policy}>
                            <input type="checkbox" value={isChecked} 
                                onChange={() => setIsChecked(e => !e)}
                            />
                            <span style={{marginLeft:"5px"}}> 
                                I agreed with the event terms and conditions  and privacy policy
                            </span>
                        </div>

                        <Button text='Register Now' btnClick={postUserData}/>

                        {isLoading && <Loader />}
                        {errorMessage && <Error error={errorMessage} />}

                    </form>
 
                  

                </div>
            </div>


        </div>
    )
}


export default Register