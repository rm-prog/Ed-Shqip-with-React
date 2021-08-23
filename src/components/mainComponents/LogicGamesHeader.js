import styles from '../../styles/logicGames.module.css'

const LogicGamesHeader = ( { title } ) => {
    return (
        <div className={styles.header}>
            {title}
        </div>
    )
}

export default LogicGamesHeader
