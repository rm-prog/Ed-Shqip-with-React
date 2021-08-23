import BackButton from '../components/buttonComponents/BackButton'
import PageHeader from '../components/mainComponents/PageHeader'
import GamesMenu from '../components/mainComponents/GamesMenu'
import styles from '../styles/mainPages.module.css'

const WordGames = () => {

    const goToMainPage = () => {
        window.open('/', '_self')
    }

    // Data used to create buttons

    const goToEnglish1 = () => {
        window.open('/word_games/english1', '_self')
    }

    const infos = [
        {
            id: 1,
            clickFunction: () => goToEnglish1(),
            buttonColor: styles.lime,
            buttonText: 'Gjeni fjalet e fshehura 1 - Anglisht'
        },
        {
            id: 2,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.yellow,
            buttonText: 'Gjeni fjalet e fshehura 2 - Anglisht'
        },
        {
            id: 3,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Gjeni fjalet e fshehura 3 - Anglisht'
        },
        {
            id: 4,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.blue,
            buttonText: 'Gjeni fjalet e fshehura 4 - Anglisht'
        },
        {
            id: 5,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.red,
            buttonText: 'Gjeni fjalet e fshehura 5 - Anglisht'
        },
        {
            id: 6,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.orange,
            buttonText: 'Gjeni fjalet e fshehura 6 - Anglisht'
        }
    ]

    return (
        <div className={`${styles.pageBody} ${styles.blueGreenBg}`}>
            <PageHeader headerColor={styles.blueYellowHeader} title='Ed-Shqip: Lojera fjalesh'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/>
            <br />
            {/* GamesMenu contains buttons that send users to other Routes */}
            <GamesMenu cardOrButton='button' infos={infos}/>
        </div>
    )
}

export default WordGames