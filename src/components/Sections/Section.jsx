/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import styles from './Section.module.css'


function Section({ children, mobileImg, desktopImg }) {
    const [img, setImg] = useState({mobileImg, desktopImg})
    
    //  ---- SETTING IMAGE FOR MOBILE AND DESKTOP SCREEN SIZE
    const BROWSER_VIEWPORT = window.innerWidth;
    
            function handleResize() {
                if(BROWSER_VIEWPORT >= 900) setImg(img.desktopImg);
    
                if(BROWSER_VIEWPORT < 900) setImg(img.mobileImg);
            }

    useEffect(function () {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return (
        <section className={`${styles.section} border-bottom`}>
                <figure>
                    <SectionImage mobileImg={mobileImg} desktopImg={desktopImg} />
                </figure>

                <div>
                    {children}
                    <p>
                        Our tech hackathon is a melting pot of visionaries, and its 
                        purpose is as clear as day: to shape the future. Whether {`you're`} 
                        a coding genius, a design maverick, or a concept wizard, {`you'll`} have 
                        the chance to transform your ideas into reality. Solving real-world 
                        problems, pushing the boundaries of technology, and creating solutions 
                        that can change the world, {`that's`} what {`we're`} all about!
                    </p>
                </div>
            </section>
    )
}

function SectionImage({mobileImg, desktopImg}) {
    //  ---- SETTING IMAGE FOR MOBILE AND DESKTOP SCREEN SIZE
    const [img, setImg] = useState(mobileImg);
    
    useEffect(function () {
        function handleResize() {
            if(window.innerWidth >= 900) setImg(desktopImg);

            if(window.innerWidth < 900) setImg(mobileImg);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [mobileImg, desktopImg]);

    return <img src={img} alt="nft" className={styles.img}/>
}

export default Section
