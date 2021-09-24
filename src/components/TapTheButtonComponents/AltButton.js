// ------------------     Used for tap the correct button game   ---------------
import styles from '../../styles/logicGames.module.css'

const AltButton = ( { bgColor = 'black', onClick, disabled, text }) => {

    return (
        <button className={styles.altButton} style={{ backgroundColor: bgColor }} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default AltButton
