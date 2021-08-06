import styles from '../styles/index.module.css'


const ButtonLink = ( { button } ) => {

    // button @parameter is an object that contains id, description, onClickFunction, color and text of ButtonLink

    const returnClassName = () => {
        switch (button.cssClass) {
            case 'blueButton':
                return styles.blueButton
            case 'yellowButton':
                return styles.yellowButton
            case 'purpleButton':
                return styles.purpleButton
            default:
                return ''
        }
    }

    return (
        /* Contains button and text above it */
        <div>
            <span className={styles.tryThisGame}> {button.desc} </span> <br />
            <button onClick={button.linkFunction} className={`${styles.myButton} ${returnClassName()}`}> {button.text} </button>
            <br /> <br />
        </div>
    )
}

export default ButtonLink
