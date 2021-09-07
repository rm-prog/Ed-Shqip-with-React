import styles from '../styles/mainPages.module.css'

import PageHeader from '../components/PageHeader'
import GamesMenu from '../components/GamesMenu'
import BackButton from '../components/BackButton'

const MathQuizes = () => {

    const goToMainPage = () => {
        window.open('/school-quizes', '_self')
    }

    // Info used to create buttons

    const infos = [
        {
            id: 1,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Thyesat 1'
        },
        {
            id: 2,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Thyesat 2, perqindjet dhe numrat dhjetor'
        },
        {
            id: 3,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.blue,
            buttonText: 'Kuiz - Algjebra 1'
        },
        {
            id: 4,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.yellow,
            buttonText: 'Kuiz - Algjebra 2'
        },
        {
            id: 5,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.orange,
            buttonText: 'Kuiz - Ekuacionet 1'
        },
        {
            id: 6,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lime,
            buttonText: 'Kuiz - Ekuacionet 2'
        },
        {
            id: 7,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.blue,
            buttonText: 'Kuiz - Ekuacionet e fuqise se dyte'
        },
        {
            id: 8,
            clickFunction: () => goToMainPage(),
            buttonColor: styles.lightblue,
            buttonText: 'Kuiz - Sistemet e ekuacioneve'
        }
    ]

    return (
        <div className={`${styles.pageBody} ${styles.blueLightBlueBg}`}>
            <PageHeader headerColor={styles.blueYellowHeader} title='Ed-Shqip: Matematike'/>
            <br /> <br />
            <BackButton onClick={goToMainPage}/>
            <br />
            {/*  GamesMenu contains buttons that sent users to other Routes */}
            <GamesMenu cardOrButton='button' infos={infos}/>
        </div>        
    )

}

export default MathQuizes