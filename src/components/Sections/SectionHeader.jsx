import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button"
import HamBurgerIcon from "../HamBurgerIcon"
import styles from './SectionHeader.module.css'
import MobileDrawer from "../MobileDrawer";

function Header() {
    // IMPLEMENTING SCROLL INTO VIEW
    const [section, setSection] = useState('');

    useEffect(function() {
        if(!section) return;
        document.querySelector(section).scrollIntoView({ behavior: "smooth" });
    }, [section]);

    console.log(section)

    const [isChecked, setIsChecked] = useState(false);

    // HANDLE SCROLLINTOVIEW    
    function handlescrollIntoView(section) {
        document.querySelector(`#${section}`).scrollIntoView(
            {
                behavior: 'smooth',
            }
        )
    }

    return (
        <>
            {/* MOBILE NAV */}
            <header className={`${styles.container} border-bottom`}>
                <Link to='/'>
                    <h3 className={styles.logo}>get<span className='color-purple'>linked</span></h3>
                </Link>
                <nav className={styles.mobile_drawer_nav}>
                    <input type="checkbox" name="drawer-toggle" id={styles['drawer-toggle']}
                        // TO CHECKBOK TO DISPLAY MOBILE DRAWER 
                        checked={isChecked}
                        onChange={() => { setIsChecked(!isChecked) }}
                    />
                    <HamBurgerIcon />
                </nav>
            </header>

            {isChecked && <MobileDrawer setIsChecked={setIsChecked}/>}

            {/* DESKTOP NAV */}
            <header className={`${styles.containerDesktop} border-bottom`}>
                <Link to='/'>
                    <h3>get<span className='color-purple'>linked</span></h3>
                </Link>

                <ul>
                    <li onClick={() => handlescrollIntoView('timeline')}>Timeline</li>
                    <li onClick={() => handlescrollIntoView('overview')}>Overview</li>
                    <li onClick={() => handlescrollIntoView('faq')}>FAQs</li>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link> 
                </ul>
                <Link to='/register'>
                    <Button text='Register' />
                </Link>
            </header>
        </>
    )
}

export default Header
