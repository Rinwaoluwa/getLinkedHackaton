/* eslint-disable react/prop-types */
/* ADDING EXTERNAL STYLE-SHEET FOR PERSONAL STYLES */
import styles from './Button.module.css'

/* RESUABLE BUTON STYLE */
const style = {
    padding: '1rem 2rem',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
}

function Button({text, btnClick}) {
    // btnClick --- FUNCTION FOR ON CLICK PROP
    return (
        <button style={style} className={`gradient ${styles.btn}`} onClick={btnClick}>
            {text}
        </button>
    )
}

export default Button
