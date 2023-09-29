// ADDING EXTERNAL STYLE-SHEET FOR PERSONAL STYLES
import { useEffect, useState } from 'react';
import styles from './Timer.module.css'

// RESUABLE TIMER STYLE
const style = {
    color: '#fff',
}

function Timer() {

    const [time, setTime] = useState(formatTime(new Date()));

    function formatTime(date) {
        return new Intl.DateTimeFormat("en", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(date);
      }

      useEffect(function () {
        const id = setInterval(function () {
          setTime(formatTime(new Date()));
        }, 1000);
    
        return () => clearInterval(id);
      }, []);
    
    return (
        <div style={style} className={styles.timerStyle}>
            <h1><span>{time.slice(0, 2)}</span> :</h1>
            <h1><span>{time.slice(3, 5)}</span> :</h1>
            <h1><span>{time.slice(6, 8)}</span>{time.slice(9, 11)}</h1>
        </div>
    )
}

export default Timer


