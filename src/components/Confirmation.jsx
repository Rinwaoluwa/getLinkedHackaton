import Button from "./Button"

import styles from './Confirmation.module.css'

function Confirmation() {
    return (
        <main className={styles.container}>
            <div className={styles.main}>
                <figure>
                    <span>
                        <img className={styles['img--1']} src="/image/successfully-done.png" alt="Successfully Done Checkmark" />
                        <img className={styles['img--2']} src="/image/successful-man.png" alt="Excited Man" />
                    </span>

                    <figcaption>
                        <h3>Congratulations you have successfully Registered!</h3>
                        <div className={styles.confirmationText}>
                            <p className={styles.confirmationParagraph}> Yes, it was easy and you did it! 
                                check your mail box for next step
                            </p>
                            <span className={styles['img--3']}><img src="/image/wink-emoji.png" alt="Wink Emoji" /></span>
                        </div>
                    </figcaption>
                    <Button text='Back' />
                </figure>
            </div>
        </main>
    )
}

export default Confirmation
