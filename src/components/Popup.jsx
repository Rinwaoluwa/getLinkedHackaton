import { useEffect, useRef } from 'react'
import Button from './Button'
import styles from './Popup.module.css'
import CloseModalSVG from './CloseModalSVG'

function Popup() {
    const popup = useRef(null)

    useEffect(function(){
        const id = setTimeout(function(){
            popup.current.classList.add('popup');
        }, 5000);
        
        return () => clearTimeout(id);
    },[]);


    return (
        <main className={styles.container} id='#popup' ref={popup}>
            <div onClick={() => {
                popup.current.classList.remove('popup');
            }} style={{position: 'absolute', left: '2rem'}}>
                <CloseModalSVG />
            </div>
            <h1 className={styles.mainText}>Frontend Developers</h1>
            <p className={styles.paragraph}>
                Hi there, this is Rinwa and Adam get<span className="color-purple">Linked</span> Developers, 
                 getLinked was created by the Co-ordinators with the intent of picking
                a winner for the Hackaton Challenge, we signed up with the Intent 
                of <span className="textGradient">securing an Internship</span> through this 
                process and also increasing our skill level. There were series of challenges 
                while working together, communication, different great ideas, different coding styles etc. 
                <br/>
                We had a rocky start at the begining, we {"didn't"} start out right we {"didn't"} 
                communicate on what format we would use to build the App or whether to have resueable 
                components, This cause alot of back and forth, In the process we realised our mistakes and 
                we made sure to Finish right  
                <span className="textGradient"> 
                 we worked very hard and smart to learn</span> from our mistakes and to integrate. 
                <span className="textGradient">We Learnt how to Learn and Integrate.</span>
                We would appreciate the <span className="textGradient">opportunity leverage our skillset </span> 
                and <span className="textGradient">practice in a real work environment</span> Thank you.
            </p>
            <div className={styles.developers}>
                <figure className={styles.developer}>
                    <img src="image/rinwa.JGP" alt="Image of getLinked Frontend Developer" 
                        className={styles['developer_img']}
                    />
                    <figcaption className={styles.developerInfo}>
                        <h1 className={styles.mainText}>Rinwaoluwa</h1>
                    </figcaption>
                </figure>

                <figure className={styles.developer}>
                    <img src="image/adam.jpg" alt="Image of getLinked Frontend Developer" 
                        className={styles['developer_img']}
                    />
                    <figcaption className={styles.developerInfo}>
                        <h1 className={styles.mainText}>Adam</h1>
                    </figcaption>
                </figure>
            </div>
            <div onClick={() => {
                popup.current.classList.remove('popup')
            }}>
                <Button text={'Hope to hear from you'} />
            </div>
        </main>
    )
}

export default Popup
