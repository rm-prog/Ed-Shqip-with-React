import styles from '../styles/logicGames.module.css'

import MetaTags from 'react-meta-tags'
import LogicGamesHeader from '../components/LogicGamesHeader'
import BackButton from '../components/BackButton'
import GameField from '../components/FindPercentageComponents/GameField'

const FindThePercentage = () => {
    return (
        <div className={`${styles.pageBody} ${styles.limeBg}`}>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />
            </MetaTags>
            <LogicGamesHeader title='Gjeni sa perqind eshte i mbushur drejtkendeshi poshte'/>
            <center>
                <GameField />
                <BackButton onClick={() => window.history.back()} />
            </center>
        </div>
    )
}

export default FindThePercentage
