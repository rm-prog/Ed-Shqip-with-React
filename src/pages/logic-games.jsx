import React from "react"
import PageHeader from "../components/PageHeader"
import BackButton from "../components/BackButton"
import GamesMenu from "../components/GamesMenu"
import styles from '../styles/mainPages.module.css'

// Card Images
import game1 from '../screenshots/memorise-the-numbers-game.PNG'
import game2 from '../screenshots/find-the-number.PNG'
import game4 from '../screenshots/remember-the-letters.PNG'
import game5 from '../screenshots/find-the-percentage.PNG'
import game6 from '../screenshots/find-the-percentage.PNG'

const LogicGames = () => {

    // Data used to create cards

    const cardsInfo = [
        {
            id: 1,
            clickFunction: () => goToMainPage(),
            imgSource: game1,
            cardTitle: 'Memorizoni rradhen e numrave',
            link: '/'
        },
        {
            id: 2,
            clickFunction: () => goToMainPage(),
            imgSource: game2,
            cardTitle: 'Gjeni numrin e fshehur',
            link: '/'
        },
        {
            id: 3,
            clickFunction: () => goToMainPage(),
            imgSource: game1,
            cardTitle: 'Memorizoni rradhen e numrave',
            link: '/'
        },
        {
            id: 4,
            clickFunction: () => goToMainPage(),
            imgSource: game4,
            cardTitle: 'Mbani mend shkronjat',
            link: '/'
        },
        {
            id: 5,
            clickFunction: () => goToMainPage(),
            imgSource: game5,
            cardTitle: 'Gjeni sa i mbushur eshte drejtkendeshi i kuq',
            link: '/'
        },
        {
            id: 6,
            clickFunction: () => goToMainPage(),
            imgSource: game6,
            cardTitle: 'Gjeni sa i mbushur eshte drejtkendeshi i kuq',
            link: '/'
        }
    ]

    const goToMainPage = () => {
        window.open('/', '_self')
    }

    return (
        <div className={`${styles.pageBody} ${styles.blueYellowBg}`}>
            <PageHeader headerColor={styles.limeHeader} title='Ed-Shqip: Lojera logjike'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/> 
            <br />
            {/* GamesMenu containes clickable cards that send users to others Routes */}
            <GamesMenu cardOrButton='card' infos={cardsInfo}/>
        </div>
    )
}

export default LogicGames
