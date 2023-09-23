/* eslint-disable react/prop-types */
// ADDING CUSTM STYLESSHEET TO ADD ANIMATION ---- STILL RE-USABLE WITHOUT STYLESHEET

import styles from './GlowEffect.module.css'

function GlowEffect({top, left, right, bottom}) {
   
    const style = {
        height: '6rem',
        width: '6rem',
        borderRadius: '50%',
        backgroundColor: '#903AFF',
        filter: 'blur(2rem)',
        position: 'absolute',
        zIndex: '-1',
        top: `${top}rem`,
        left: `${left}`,
        right: `${right}rem`,
        bottom: `${bottom}rem`,
    }
    return (
        <div style={style} className={styles.glow}></div>
    )
}

export default GlowEffect
