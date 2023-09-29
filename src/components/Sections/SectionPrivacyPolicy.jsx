import Button from '../Button'
import CheckmarkSVG from '../CheckmarkSVG'
import styles from './SectionPrivacyPolicy.module.css'

function SectionPrivacyPolicy({children}) {
    return (
        <section className={styles.container}>
            <div>
                {children}

                <h3 className={styles.date}>Last updated on September 12, 2023</h3>

                <p>Below are our privacy & policy, which outline a lot 
                    of goodies. {`it's`} our aim to always take of our participant
                </p>

                <article className={styles.info}>
                    <p>
                    At getlinked tech Hackathon 1.0, we 
                    value your privacy and are committed 
                    to protecting your personal information.
                    This Privacy Policy outlines how we collect,
                    use, disclose, and safeguard your data 
                    when you participate in our tech hackathon 
                    event. By participating in our event, you 
                    consent to the practices described in this 
                    policy.
                    </p>

                    <h2 className='color-purple'>Licensing Policy</h2>
                    <h3>Here are terms of our Standard License:</h3>

                    <ul>
                        <li>
                            <span><CheckmarkSVG /></span> 
                            <span>The Standard License grants you a non-exclusive 
                                right to navigate and register for our event
                            </span>
                        </li>
                        <li>
                            <span><CheckmarkSVG /></span> 
                            <span>
                                You are licensed to use the item 
                                available at any free source sites, for 
                                your project developement
                            </span>
                        </li>
                    </ul>
                    <Button text='Read More'/>
                </article>
            </div>
            <figure className={styles.privacyImg}>
                <img src="image/lock.png" alt="" />
            </figure>
        </section>
    )
}

export default SectionPrivacyPolicy
