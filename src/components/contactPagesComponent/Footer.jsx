
import InstagramSVG from "../InstagramSVG";
import XIcon from "../XSVG";
import FacebookSVG from "../FacebookSVG";
import LinkedinSVG from "../LinkedInSVG";

import styles from './ContactPage.module.css'


function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{color:"#fffff"}}>Share on</div>

      <div className={styles['icon_share']}>

        <div className={styles.share}>
          <InstagramSVG height="30" />
        </div>

        <div className={styles.share}>
          <XIcon/>
        </div>
            
        <div className={styles.share}>
          <FacebookSVG/>
        </div>

        <div className={styles.share}>
          <LinkedinSVG/>
        </div>
       
      </div>
    </footer>       
  )
}

export default Footer;
