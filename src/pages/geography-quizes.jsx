import styles from '../styles/mainPages.module.css'

import PageHeader from '../components/PageHeader'
import GamesMenu from '../components/GamesMenu'
import BackButton from '../components/BackButton'

const GeographyQuizes = () => {

    const goToMainPage = () => {
        window.open('/school-quizes', '_self')
    }

    
    const goToEuropeContinent = () => {
        window.open('/school-quizes/geography-quizes/europe', '_self')
    }

    // Info used to create buttons

    const infos = [
        {
            id: 1,
            clickFunction: () => goToEuropeContinent(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Kontinenti i Europes'
        },
        {
            id: 2,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Kryeqytetet e Europes'
        },
        {
            id: 3,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.blue,
            buttonText: 'Kuiz - Kontinenti i Azise dhe Australise'
        },
        {
            id: 4,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.yellow,
            buttonText: 'Kuiz - Kryeqytetet e Azise dhe Australise'
        },
        {
            id: 5,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.orange,
            buttonText: 'Kuiz - Kontinenti i Afrikes'
        },
        {
            id: 6,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Kryeqytetet e Afrikes',
        },
        {
            id: 7,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Kontinenti i Amerikes se Jugut'
        },
        {
            id: 8,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.blue,
            buttonText: 'Kuiz - Kryeqytetet e Amerikes se Jugut'
        }
    ]

    return (
        <div className={`${styles.pageBody} ${styles.blueRedBg}`}>
            <PageHeader headerColor={styles.blueYellowHeader} title='Ed-Shqip: Gjeografi'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/>
            <br />
            {/*  GamesMenu contains buttons that sent users to other Routes */}
            <GamesMenu cardOrButton='button' infos={infos}/>
        </div>        
    )

}

export default GeographyQuizes