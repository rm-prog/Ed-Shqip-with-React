import styles from '../../styles/logicGames.module.css'

const TableButtonCell = ( { onClick = () => console.log('Ok'), text } ) => {
    return (
        <td className={styles.tableCell}>
            <button className={styles.tableButton} onClick={onClick}>
                {text}
            </button>
        </td>
    )
}

export default TableButtonCell

