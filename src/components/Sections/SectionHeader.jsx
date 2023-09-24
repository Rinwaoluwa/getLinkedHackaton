import { Link } from "react-router-dom";

import Button from "../Button"
import HamBurgerIcon from "../HamBurgerIcon"
import styles from './SectionHeader.module.css'

function Header() {
    
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
                    <li>Timeline</li>
                    <li>Overview</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
                <Button text='Register' />
            </header>
        </>
    )
}

export default Header
