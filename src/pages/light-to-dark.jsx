import styles from '../styles/logicGames.module.css'

import LogicGamesHeader from '../components/LogicGamesHeader'
import GameField from '../components/LightToDarkComponents/GameField'
import BackButton from '../components/BackButton'

const LightToDark = () => {
    return (
        <div className={`${styles.pageBody} ${styles.blueGreenBg}`}>
            <LogicGamesHeader title='Rendisni ngjyrat ne rendin e duhur'/> 
            <center>
                <GameField />
                <BackButton onClick={() => window.history.back()}/>
            </center>
        </div>
    )
}

export default LightToDark
