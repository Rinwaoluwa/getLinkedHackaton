
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

        <a className={styles.share} href="">
          <InstagramSVG height="30" />
        </a>

       
        <a className={styles.share} href="https://twitter.com/getLinkedai" target='blank'>
          <XIcon />
        </a>
      
  
        <a className={styles.share} href="">
          <FacebookSVG/>
        </a>

        <a className={styles.share} href="https://ng.linkedin.com/company/getlinked-ai">
          <LinkedinSVG/>
        </a>
       
      </div>
    </footer>       
  )
}

export default Footer;
