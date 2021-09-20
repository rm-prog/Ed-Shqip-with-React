import styles from '../styles/logicGames.module.css'

const TableButtonCell = ( { buttonStyle = { display: 'inline-block' }, buttonClass, onClick, text = '', disabled = false } ) => {
    return (
        <td className={styles.tableCell}>
            <button className={buttonClass} style={buttonStyle} onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </td>
    )
}

export default TableButtonCell
