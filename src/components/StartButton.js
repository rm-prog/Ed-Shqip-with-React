import styles from '../styles/wordGame.module.css'

const StartButton = ( { onClick, display, text = 'Filloni Lojen', disabled = false } ) => {
    return (
        <button className={`${styles.startButton} ${display}`} onClick={onClick} disabled={disabled}> {text} </button>
    )
}

export default StartButton
