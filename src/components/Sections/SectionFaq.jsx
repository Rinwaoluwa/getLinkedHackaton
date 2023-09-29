/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import styles from './SectionFaq.module.css'

const questions = [
    {id: 203, question: 'Can I work on the project I started before the Hackaton ?'},
    {id: 407, question: 'What happens if I need help during the hackaton ?'}, 
    {id: 395, question: "What happens if I don't have an idea for a project ?"},
    {id: 878, question: 'Can I join a team or do I have to come with one ?'},
    {id: 456, question: 'What happens after the hackaton ends ?'},
]

function SectionFaq({children}) {

    
    //  ---- SETTING IMAGE FOR MOBILE AND DESKTOP SCREEN SIZE
    const [img, setImg] = useState("/image/think.png");

    useEffect(function () {

        function handleResize() {
            if(window.innerWidth >= 900) setImg("/image/think-desktop.png");

            if(window.innerWidth < 900) setImg("/image/think.png");
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <section className={`${styles.faq} border-bottom`} id='faq'>
            <div>
                {children}
                <p>We got answers to the questions that you might
                    want to ask about <b>getlinked Hackathon 1.0</b>
                </p>

                <div className={styles.questions}>
                    {questions.map((question) => <Question question={question.question} key={question.id}/>)}
                </div>
            </div>

            <figure className={styles.img}>
                <img src={img} alt="Maybe A Man thinking" />
                <figcaption className={styles.imgCaption}>
                    <h1>?</h1>
                    <h1 id={styles.text}>?</h1>
                    <h1>?</h1>
                </figcaption>
            </figure>
        </section>
    )
}

function Question({question}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={`${styles.question} ${!isOpen && 'border-bottom--1'} `} onClick={() => setIsOpen(e => !e)}>
                <p>{question}</p><span className='color-purple'>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen ?   
                <div className={`${styles.answer} ${isOpen && 'border-bottom--1'}`}>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit Perspiciatis dolore voluptas dolores illum consectetur <br /> esse unde fugiat 
                    quas aut recusandae, beatae adipisci cum delectus saepe accusantium dicta aperiam iste voluptate
                </div> : ''
            }
        </>
    )
}

export default SectionFaq
