import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button"
import HamBurgerIcon from "../HamBurgerIcon"
import styles from './SectionHeader.module.css'

function Header() {
    // IMPLEMENTING SCROLL INTO VIEW
    const [section, setSection] = useState('');

    useEffect(function() {
        if(!section) return;
        document.querySelector(section).scrollIntoView({ behavior: "smooth" });
    }, [section]);


    
    return (
        <>
                {/* MOBILE NAV */}
            <header className={`${styles.container} border-bottom`}>
                <Link to='/'>
                    <h3>get<span className='color-purple'>linked</span></h3>
                </Link>
                <HamBurgerIcon />
            </header>

                {/* DESKTOP NAV */}
            <header className={`${styles.containerDesktop} border-bottom`}>
                <Link to='/'>
                    <h3>get<span className='color-purple'>linked</span></h3>
                </Link>
                <ul>
                    <li onClick={() => setSection('#timeline')}>Timeline</li>
                    <li onClick={() => setSection('#overview')}>Overview</li>
                    <li onClick={() => setSection('#faq')}>FAQs</li>
                    <li onClick={() => setSection('#contact')}>Contact</li> {/*Section Footer is Contact*/}
                </ul>
                <Button text='Register' />
            </header>
        </>
    )
}



function HeaderRRR() {
    // IMPLEMENTING SCROLL INTO VIEW
    const [section, setSection] = useState('');

    useEffect(function() {
        if(!section) return;
        document.querySelector(section).scrollIntoView({ behavior: "smooth" });
    }, [section]);

    console.log(section)

    return (
        <>
                {/* MOBILE NAV */}
            <header className={`${styles.container} border-bottom`}>
                <Link to='/'>
                    <h3>get<span className='color-purple'>linked</span></h3>
                </Link>
                <HamBurgerIcon />
            </header>

                {/* DESKTOP NAV */}
            <header className={`${styles.containerDesktop} border-bottom`}>
                <Link to='/'>
                    <h3>get<span className='color-purple'>linked</span></h3>
                </Link>

                <ul>
                    <li onClick={() => setSection('#timeline')}>Timeline</li>
                    <li onClick={() => setSection('#overview')}>Overview</li>
                    <li onClick={() => setSection('#faq')}>FAQs</li>
                    <li onClick={() => setSection('#contact')}>Contact</li>
                </ul>
                
                <Button text='Register' />
            </header>
        </>
    )
}


export default Header
