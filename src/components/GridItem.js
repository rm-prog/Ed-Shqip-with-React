import styles from '../styles/logicGames.module.css'

const GridItem = ( { onClick, text = '' } ) => {
    return (
        <div className={styles.gridItem} onClick={onClick}>{text}</div>
    )
}

export default GridItem
