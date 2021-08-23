import styles from '../../styles/mainPages.module.css'

const GameButton = ( { buttonColor, onClick, buttonText } ) => {

    return (
        <button className={`${styles.gameButton} ${buttonColor}`} onClick={onClick}> {buttonText} </button>
    )
    
}

export default GameButton
