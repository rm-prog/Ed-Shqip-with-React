import styles from '../../styles/quiz.module.css'

const NextButton = ( { onClick, disabled } ) => {
    return (
        <button className={`${styles.next_btn} ${styles.btn}`} onClick={onClick} disabled={disabled}>
            Next
        </button> 
    )
}

export default NextButton
