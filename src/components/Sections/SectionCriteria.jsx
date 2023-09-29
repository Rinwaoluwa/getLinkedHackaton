// import { useEffect, useState } from "react"
import { gsap } from "gsap";
import { useEffect, useState } from "react";



import Button from "../Button"
import styles from './SectionCriteria.module.css'
import GlowEffect from "../GlowEffect";
const criteria = [
    {title: 'Innovation and Creativity:', 
    subTitle: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
    },

    {title: 'Functionality:', 
    subTitle: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
    },

    {title: 'Impact and Relevance:', 
    subTitle: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
    },

    {title: 'Technical Complexity:', 
    subTitle: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },

    {title: 'Adherence to Hackaton Rules:', 
    subTitle: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
]

function SectionCriteria({children}) {
    /////////////////////// SECTION SCROLL ANIMATION ///////////////
    useEffect(function() {
        gsap.fromTo('.fadeIn', {
            y: 50,
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: '.fadeIn',
              start: "-500px",
              end: '400px',
              scrub: true, 
            },
            stagger: {
                amount: 0.3,
            },
            y: 0,
            opacity: 1,
        });
    }, [])

      

    //  ---- SETTING IMAGE FOR MOBILE AND DESKTOP SCREEN SIZE
    const [img, setImg] = useState("image/judges.png");

    const BROWSER_VIEWPORT = window.innerWidth;

    function handleResize() {
        if(BROWSER_VIEWPORT >= 900) setImg("image/judges-desktop.png");

        if(BROWSER_VIEWPORT < 900) setImg("image/judges.png");
    }

    useEffect(function () {

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    
    return (
        <section className={`${styles.criteria} border-bottom`}>
            <GlowEffect top={4}/>
            <figure className={styles.imgContainer}>
                <img src={img} alt="people" className={styles.img}/>
            </figure>

            <div className={styles.criteriaText}>
                {children}
                {criteria.map((text, index) => <Criteria title={text.title} subTitle={text.subTitle} key={index} />)}
                <Button text='Read More' />
            </div> 
            <GlowEffect right={0} bottom={0}/>
        </section>
    )
}

function Criteria({title, subTitle}) {
    return (
        <p className="fadeIn">
            <span className="color-purple">{title} {'  '}</span>
            {subTitle}
        </p>                                
    )
}

export default SectionCriteria
