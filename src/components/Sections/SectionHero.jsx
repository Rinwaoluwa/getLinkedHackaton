import Button from '../Button'
import GlowEffect from '../GlowEffect'
import ParticleContainer from '../ParticleContainer'
import SphereAnimation from '../SphereAnimation'
import Stars from '../Stars'
import Timer from '../Timer'
import BentStrokeSVG from '../bentStrokeSVG'

// SYLING
import styles from './SectionHero.module.css'

function Hero() {
    return (   
        <section className={`${styles.cta} border-bottom`} id='overview'>
            
            <div className={styles.mainText}>
                <h3>Igniting a Revolution in HR Innovation</h3>
                <BentStrokeSVG />
            </div>

            <ParticleContainer /> {/*For the floating star effect*/}


            <main className={styles.content}>
                <div className={styles.mainCta}>
                    <GlowEffect left={0}/>
                    <Stars />

                    <div className={styles['text--1']}>
                        <img src="/image/bulb.png" alt="bulb" className={styles.bulb}/>
                        <h1>getlinked Tech</h1>
                    </div>

                    <div className={styles['text--2']}>
                        <h1>Hackathon <span className='color-purple'>1.0</span></h1>
                        <img src="/image/chain.png" alt="Chain" />
                        <img src="/image/spark.png" alt="Spark" />
                    </div>   

                    <p>Participate in getlinked tech Hackathon 2023 
                        stand a chance to win a Big prize
                    </p>
                    <Button text='Register' />
                    <Timer />
                </div>

                <figure className={styles.imgContainer}>
                    <img src="/image/hero.png" alt="A Boy with glasses" />
                    <SphereAnimation />
                </figure>  
           </main>

        </section>
    )
}

export default Hero
