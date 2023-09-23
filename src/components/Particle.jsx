import { useEffect, useState } from 'react';
import styles from './Particle.module.css'

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
function Particle({color = '#D434FE'}) {
    const [style, setStyle] = useState({
        '--x': '50',
        '--y': '50',
        '--duration': '10',
        '--delay': '0',
        '--alpha': '0.7',
        '--origin-x': '0',
        '--origin-y': '0',
        '--size': '0.5'
    })

    useEffect(function() {

        const updateStyles = () => {
            // Generate random values for CSS  properties
            const x = RANDOM(20, 80);
            const y = RANDOM(20, 80);
            const duration = RANDOM(6, 20);
            const delay = RANDOM(1, 10);
            const alpha = RANDOM(40, 90) / 100;
            const originX = Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800);
            const originY = Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800);
            const size = RANDOM(40, 90) / 100;
      
            // Update the styles state with the new values
            setStyle({
              '--x': x.toString(),
              '--y': y.toString(),
              '--duration': duration.toString(),
              '--delay': delay.toString(),
              '--alpha': alpha.toString(),
              '--origin-x': originX.toString() + '%',
              '--origin-y': originY.toString() + '%',
              '--size': size.toString(),
            });
        };
      
        // Setting an interval to update styles periodically (every 2 seconds )
        const intervalId = setInterval(updateStyles, 2000);
      
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [])

    
    return (
    <svg className={styles.particle} viewBox="0 0 15 15" fill={color} xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 
        6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 
        9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 
        10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 
        5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill={color} 
        stroke="black" strokeLinecap="round" strokeLinejoin="round" 
        />
    </svg>
    )
}

export default Particle
