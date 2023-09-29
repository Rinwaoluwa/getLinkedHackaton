import styles from './SectionPartnersandSponsors.module.css'
import ParticleContainer from '../ParticleContainer'

function SectionPartnersandSponsors() {
    return (
        <section className={`${styles.container} border-bottom`}>
            <h2>Partners and Sponsors</h2>
            <p>
                Getlinked Hackathon 1.0 is honored to have the following major 
                companies as its partners and sponsors
            </p>
            <figure className={styles.imgContainer}>
                <div>
                    <img src="image/Liberty-company-logo-white-color.png" alt="Liberty Company Logo" />                    
                    <img src="image/Liberty-company-logo-white.png" alt="Liberty Pay Logo" />
                    <img src="image/Winwise-logo-white-color.png" alt='Winwise Logo'/>
                </div>

                <ParticleContainer /> {/*Floating star effect*/}
                <div>
                    <img src="image/wisper-logo-white.png" alt="wisper logo" />
                    <span>Pay<em>box</em></span>
                    <img src="image/Vizual-plus.png" alt="visual plus logo" />
                </div>
            </figure>
        </section>
    )
}

export default SectionPartnersandSponsors
