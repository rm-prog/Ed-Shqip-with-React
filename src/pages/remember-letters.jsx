
import styles from '../styles/logicGames.module.css'

import LogicGamesHeader from '../components/LogicGamesHeader'
import StartButton from '../components/StartButton'
import GameField from '../components/RememberLetterComponents/GameField'
import BackButton from '../components/BackButton'


const RememberLetters = () => {

    return (
        <div className={`${styles.pageBody} ${styles.blueYellowBg}`}>
            <LogicGamesHeader title='Mbani mend shkronjat'/> <br /> <br />
            <center>
                <GameField /> <br />
                <BackButton onClick={() => window.history.back()}/>
            </center>
        </div>
    )
}

export default RememberLetters
