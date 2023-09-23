import styles from './Star.module.css'

function Star() {
    return (
        <>
            <div className={styles['star--1']}></div>
            <div className={styles['star--2']}></div>
            <div className={styles['star--3']}></div>
            <div className={styles['star--4']}></div>
        </>
    )
}

export default Star
