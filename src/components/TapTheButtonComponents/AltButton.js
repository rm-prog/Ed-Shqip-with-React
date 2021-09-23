// ------------------     Used for tap the correct button game   ---------------
import styles from '../../styles/logicGames.module.css'

const AltButton = ( { bgColor = 'black', onClick }) => {

    return (
        <button className={styles.altButton} style={{ backgroundColor: bgColor }} onClick={onClick}/>
    )
}

export default AltButton
