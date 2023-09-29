import styles from './SectionPrizesandRewards.module.css'

function SectionPrizesandRewards({children}) {
    return (
        <section className={styles.container}>
            {children}
            <p>Highlight of the prizes or rewards for winners and for participants.</p>
            <figure>
                <img src="image/trophy.png" alt="Trophy" />
                <img src="image/rewards.png" alt="Medals" />
            </figure>     
        </section>
    )
}

export default SectionPrizesandRewards
