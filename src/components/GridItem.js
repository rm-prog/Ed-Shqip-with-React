import styles from '../styles/logicGames.module.css'

const GridItem = ( { onClick, text = '', style } ) => {
    return (
        <div className={styles.gridItem} onClick={onClick} style={style}>{text}</div>
    )
}

export default GridItem
