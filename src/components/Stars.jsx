import styles from './Stars.module.css'

function Stars() {
    return (
        <div className={styles.stars}>
            <span className={styles['star-1']}><img src="image/star.png" alt="Star" /></span>
            <span className={styles['star-2']}><img src="image/star-1.png" alt="Star" /></span>
            <span className={styles['star-3']}><img src="image/star-2.png" alt="Star" /></span>
        </div>
    )
}

export default Stars
