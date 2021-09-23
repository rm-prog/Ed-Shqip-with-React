import styles from '../styles/logicGames.module.css'

import LogicGamesHeader from '../components/LogicGamesHeader'
import GameField from '../components/TapTheButtonComponents/GameField'
import BackButton from '../components/BackButton'


const TapTheButton = () => {
    return (
        <div className={`${styles.pageBody} ${styles.limeBg}`}>
            <LogicGamesHeader title='Shtypni butonin e duhur'/> <br /> <br />
            <center>
                <GameField /> <br /> <br />
                <BackButton onClick={() => window.history.back()} />
            </center>
        </div>
    )
}

export default TapTheButton
