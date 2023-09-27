/* eslint-disable react/prop-types */




import GlowEffect from '../GlowEffect'
import styles from './SectionTimeline.module.css'


const eventDetails = [ 
    {title: 'Hackaton Announcement', 
    subTitle: 'The getlinked tech hackathon 1.0 is formally announced  to the general public and teams begin to get ready to register'
    },

    {title: 'Teams Registration begins', 
    subTitle: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
    },
    
    {title: 'Teams Registration ends', 
    subTitle: 'Interested Participants are no longer Allowed to register'
    },
    
    {title: 'Announcement of the accepted teams and ideas', 
    subTitle: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
    },

    {title: 'Getlinked Hackathon 1.0 Offically Begins', 
    subTitle: 'Accepted teams can now proceed to build their ground breaking skill driven solutions'
    },
    
    {title: 'Demo Day', 
    subTitle: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
    },
]


function Timeline({children}) {
    
    return (
         
            <section className={styles.timeline} id='timeline'>
                {children}

                <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

                <GlowEffect top={8}/>

                    {eventDetails.map((text, index)=> {
                        return (
                            <div className={styles.timelineTracker} key={index}>
                                <TimelineIndex key={index} index={index + 1} />
                                <EventDetails title={text.title} subTitle={text.subTitle} key={text}/>
                            </div>
                        )}) 
                    }
                <GlowEffect right={0}  top={3}/>
                <GlowEffect right={0} bottom={20}/>
            </section>
    )
}

function TimelineIndex({index}) {
    return (
        <div className={styles.strokeContainer}>
            <div className={styles.stroke}></div>
            <h3 className={`${styles.strokeText} gradient`}>{index}</h3>
        </div>
    )
}

function EventDetails ({title, subTitle}) {
    return (
        <div className={styles.event}>
            <div className={styles.eventDetails}>
                <h3 className='color-purple'>{title}</h3>
                <p>{subTitle}</p>
            </div>
            <EventDate />             
        </div>
    )
}

function EventDate() {
    return <div className={`${styles.eventDate} color-purple`}>November 18, 2023</div>
}
export default Timeline
