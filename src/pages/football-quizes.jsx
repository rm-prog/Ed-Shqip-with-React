import styles from '../styles/mainPages.module.css'
import PageHeader from '../components/PageHeader'
import GamesMenu from '../components/GamesMenu'
import BackButton from '../components/BackButton'

const FootballQuizes = () => {

    const goToMainPage = () => {
        window.open('/', '_self')
    }

    // Data used to create buttons

    const infos = [
        {
            id: 1,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.yellow,
            buttonText: 'Kuiz - Boterori 1'
        },
        {
            id: 2,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Boterori 2'
        },
        {
            id: 3,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Europiani 1'
        }
    ]

    return (
        <div class={`${styles.pageBody} ${styles.blueLightBlueBg}`}>
            <PageHeader headerColor={styles.blueYellowHeader} title='Ed-Shqip: Kuize Futbolli'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/>
            <br />
            {/*  GamesMenu contains buttons that help users navigate */}
            <GamesMenu cardOrButton='button' infos={infos}/>
        </div>        
    )
}

export default FootballQuizes