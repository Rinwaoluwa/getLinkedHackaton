import Button from '../components/Button'
import CloseModalSVG from '../components/CloseModalSVG'
import styles from './MobileDrawer.module.css'

function MobileDrawer() {
    return (
        <main className={styles.container}>
            <div>
                <span></span>
                <CloseModalSVG />
            </div>
            
            <ul>
                <li><h1>Timeline</h1></li>
                <li><h1>Overview</h1></li>
                <li><h1>FAQs</h1></li>
                <li><h1>Contact</h1></li>
                <Button text='Register' />
            </ul>
        </main>
    )
}

export default MobileDrawer
