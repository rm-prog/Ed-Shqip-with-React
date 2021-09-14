import styles from '../styles/logicGames.module.css'

const TableButtonCell = ( { buttonStyle = { display: 'inline-block' }, buttonClass, onClick, text = '' } ) => {
    return (
        <td className={styles.tableCell}>
            <button className={buttonClass} style={buttonStyle} onClick={onClick}>
                {text}
            </button>
        </td>
    )
}

export default TableButtonCell
