import styles from '../../styles/logicGames.module.css'

const NextButton = ( { onClick, disabled = false } ) => {
    return (
        <button className={styles.nextBtn} onClick={onClick} disabled={disabled}>
            Next
        </button>
    )
}

export default NextButton
