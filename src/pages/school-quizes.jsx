import styles from '../styles/mainPages.module.css'

import PageHeader from '../components/PageHeader'
import GamesMenu from '../components/GamesMenu'
import BackButton from '../components/BackButton'

const SchoolQuizes = () => {

    const goToMainPage = () => {
        window.open('/', '_self')
    }
    
    const goToGeographyPage = () => {
        window.open('/school-quizes/geography-quizes', '_self')
    }

    const goToMathPage = () => {
        window.open('/school-quizes/math-quizes', '_self')
    }

    const goToPhysicsPage = () => {
        window.open('/school-quizes/physics-quizes', '_self')
    }

    const goToHistoryPage = () => {
        window.open('/school-quizes/history-quizes', '_self')
    }

    const goToChemistryPage = () => {
        window.open('/school-quizes/chemistry-quizes', '_self')
    }

    // Info used to create buttons

    const infos = [
        {
            id: 1,
            clickFunction: () => goToGeographyPage(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Gjeografi'
        },
        {
            id: 2,
            clickFunction: () => goToMathPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Matematike'
        },
        {
            id: 3,
            clickFunction: () => goToPhysicsPage(),
            buttonColor: styles.blue,
            buttonText: 'Kuiz - Fizik'
        },
        {
            id: 4,
            clickFunction: () => goToHistoryPage(),
            buttonColor: styles.yellow,
            buttonText: 'Kuiz - Histori'
        },
        {
            id: 5,
            clickFunction: () => goToChemistryPage(),
            buttonColor: styles.orange,
            buttonText: 'Kuiz - Kimi'
        }
    ]

    return (
        <div className={`${styles.pageBody} ${styles.blueGreenBg}`}>
            <PageHeader headerColor={styles.blueYellowHeader} title='Ed-Shqip: Kuize'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/>
            <br />
            {/*  GamesMenu contains buttons that sent users to other Routes */}
            <GamesMenu cardOrButton='button' infos={infos}/>
        </div>        
    )

}

export default SchoolQuizes