import styles from '../../styles/quiz.module.css'

const AltButton = ( { id, value, clickFunction, text, btnColor } ) => {
    
    let altId;

    if (id == 'alt1') altId = styles.alt1
    else if (id == 'alt2') altId = styles.alt2
    else altId = styles.alt3

    return (
        <button id={altId} className={`${styles.btn} ${btnColor}`} 
        value={value} onClick={clickFunction}> {text} </button>
    )
}

export default AltButton
