import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button"
import HamBurgerIcon from "../HamBurgerIcon"
import styles from './SectionHeader.module.css'

function Header() {
    // IMPLEMENTING SCROLL INTO VIEW
    const [section, setSection] = useState('');
    
    return (
        <>
                {/* MOBILE NAV */}
            <header className={`${styles.container} border-bottom`}>
                <Link to='/'>
                    <h3 className={styles.logo}>get<span className='color-purple'>linked</span></h3>
                </Link>
                    <HamBurgerIcon />
                {/* <Link to=''>
                </Link> */}
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
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link> {/*Section Footer is Contact*/}
                </ul>
                <Button text='Register' />
            </header>
        </>
    )
}

export default Header
