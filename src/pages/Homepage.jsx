import { HashRouter, Route, Routes } from 'react-router-dom'


// HOMEPAGE SECTION COMPONENTS
import Header from "../components/Sections/SectionHeader";
import Hero from "../components/Sections/SectionHero";
import Section from "../components/Sections/Section";
import TitleTexts from "../components/TitleTexts";
import Criteria from "../components/Sections/SectionCriteria";
import Faq from "../components/Sections/SectionFaq";
import Timeline from "../components/Sections/SectionTimeline";
import PrizesandRewards from '../components/Sections/SectionPrizesandRewards';
import PartnersandSponsors from '../components/Sections/SectionPartnersandSponsors';
import PrivacyPolicy from '../components/Sections/SectionPrivacyPolicy';
import Footer from '../components/Sections/SectionFooter';


// ---- HOMEPAGE STYLING -----
import styles from './Homepage.module.css'

function Homepage() {

    // DO HASH ROUTING

    return (
        <main className={styles.main}>
            {/* <HashRouter> */}
                {/* <Routes> */}

                    {/* <Route element={<Header />} /> */}
                    <Header />
                    {/* <Route element={<Hero />} /> */}
                    <Hero />

                    {/* <Route element={
                        <Section mobileImg = '/image/big-idea.png' desktopImg = '/image/big-idea-desktop.png'>
                            <TitleTexts title="Introduction to getlinked" subTitle="techHackaton 1.0"  />
                        </Section>
                    } /> */}

                    <Section mobileImg = '/image/big-idea.png' desktopImg = '/image/big-idea-desktop.png'>
                        <TitleTexts title="Introduction to getlinked" subTitle="techHackaton 1.0"  />
                    </Section>

                    {/* <Route element={
                        <Section mobileImg= '/image/img-1.png' desktopImg= '/image/img-1-desktop.png'>
                            <TitleTexts title="Rules and" subTitle="Guidelines" />
                        </Section>
                    }/> */}

                        <Section mobileImg= '/image/img-1.png' desktopImg= '/image/img-1-desktop.png'>
                            <TitleTexts title="Rules and" subTitle="Guidelines" />
                        </Section>


                    <Criteria>
                        <TitleTexts title='Judging Criteria' subTitle='Key attributes' />
                    </Criteria>

                    <Faq>
                        <TitleTexts title='Frequently asked' subTitle='Questions' />
                    </Faq>

                    <Timeline>
                        <TitleTexts title='Timeline' />
                    </Timeline>


                    <PrizesandRewards>
                        <TitleTexts title='Prizes and' subTitle='Rewards' />
                    </PrizesandRewards>

                    <PartnersandSponsors />

                    <PrivacyPolicy>
                        <TitleTexts title='Privacy Policy and' subTitle='Terms' />
                    </PrivacyPolicy>

                    <Footer />

            {/* </Routes> */}
            {/* </HashRouter> */}
                {/* <Confirmation /> */}
                </main>
    )
}

export default Homepage;
