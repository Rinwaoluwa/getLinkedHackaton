import DialerSVG from '../DialerSVG';
import VerticalStroke from '../verticalStroke';
import LocationIcon from '../LocationIcon'
import styles from './SectionFooter.module.css';
import InstagramSVG from '../InstagramSVG';
import XIcon from '../XSVG';
import FacebookSVG from '../FacebookSVG';
import LinkedInSVG from '../LinkedInSVG';

function SectionFooter() {
    return (
        <footer className={styles.footer} id='contact'>
           <main className={styles.footerNavigations}>
            <div className={styles.info}>
                    <h3 className={styles.logo}>get<span className='color-purple'>linked</span></h3>
                    <p>
                        Getlinked Tech Hackathon is a technology
                        innovation program established by a group 
                        of organizations with the aim of showcasing 
                        young and talented individuals in the field 
                        of technology
                    </p>
                    <div className={styles.terms}>
                        <span>Terms of Use</span>
                        <span className={styles.verticalStroke}><VerticalStroke /> </span>
                        <span>Privacy Policy</span>
                    </div>
            </div>

                <ul className={styles.links}>
                    <h3 className='color-purple'>Useful Links</h3>
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQs</li>
                    <li>Register</li>

                    <div className={styles.socials}>
                        <h3 className='color-purple'>Follow Us</h3>
                        <span><InstagramSVG /></span>
                        <span><a href="https://twitter.com/getLinkedai" target='blank'><XIcon /></a></span>
                        <span><FacebookSVG /></span>
                        <span><a href="https://ng.linkedin.com/company/getlinked-ai"><LinkedInSVG /></a></span>
                    </div>
                </ul>

                <div className={styles.contact}>
                    <h3 className='color-purple'>Contact Us</h3>

                    <div className={styles.dialer}>
                        <span><DialerSVG /></span>
                        <span>+234 6707653444</span>
                    </div>

                    <div className={styles.location}>
                        <span><LocationIcon /></span>
                        <span>27,Alara Street Yaba 100012 Lagos State</span>
                    </div>
                </div>
           </main>
            <div className={styles.copyright}>All rights reserved. © getlinked Ltd.</div>
        </footer>
    )
}

export default SectionFooter
