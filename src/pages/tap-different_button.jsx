import styles from '../styles/logicGames.module.css'

import LogicGamesHeader from '../components/LogicGamesHeader'
import GameField from '../components/TapDifferentComponents/GameField'
import BackButton from '../components/BackButton'

const TapDifferentButton = () => {
    return (
        <div className={`${styles.pageBody} ${styles.aquamarineBg}`}>
            <LogicGamesHeader title='Shtypni kutine qe ndryshon nga te tjerat'/> <br /> <br />
            <center>
                <GameField /> <br /> <br />
                <BackButton onClick={() => window.history.back()} />
            </center>
        </div>
    )
}

export default TapDifferentButton
