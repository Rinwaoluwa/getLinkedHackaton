import styles from './Loader.module.css'

function Loader() {
    return (
        <>
            <div className={styles.container}>
                <h2>Please wait...</h2>

                <div className={styles.loader}>
                    <span style={{"--i":"0"}}></span>
                    <span style={{"--i":"1"}}></span>
                    <span style={{"--i":"2"}}></span>
                    <span style={{"--i":"3"}}></span>
                    <span style={{"--i":"4"}}></span>
                    <span style={{"--i":"5"}}></span>
                    <span style={{"--i":"6"}}></span>
                    <span style={{"--i":"7"}}></span>
                </div>
            </div>

            <svg>
                <filter id={styles['#Gooey']}>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 20 -10" />
                </filter>
            </svg>
        </>
    )
}

export default Loader
