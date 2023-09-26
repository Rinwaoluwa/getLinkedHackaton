import { Link } from 'react-router-dom'
import Button from './Button'
import CloseModalSVG from './CloseModalSVG'
import styles from './MobileDrawer.module.css'

function MobileDrawer({ setIsChecked }) {

    // setIsChecked is the setter function from header to close modal

    function handlescrollIntoView(section) {
        document.querySelector(`#${section}`).scrollIntoView(
            {
                behavior: 'smooth',
            }
        )
    }


    return (
        <main className={styles.container}>
            
            {/* SPAN IS THE DARK BACKGROUND IMAGE */}
            <div className={styles.closeModal} onClick={() => setIsChecked(false)}>
                <span></span>
                <CloseModalSVG />
            </div>
                        
            <ul>
                <li onClick={() => handlescrollIntoView('timeline')}>Timeline</li>
                <li onClick={() => handlescrollIntoView('overview')}>Overview</li>
                <li onClick={() => handlescrollIntoView('faq')}>FAQs</li>
                <Link to='/contact'>
                        <li>Contact</li>
                </Link>
                <Button text='Register' />
            </ul>
        </main>
    )
}

export default MobileDrawer
