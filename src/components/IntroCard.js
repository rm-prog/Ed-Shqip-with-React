import ButtonLinks from "./ButtonLinks"
import styles from '../styles/index.module.css'

const IntroCard = ( { title, descTitle, buttonsText } ) => {

    // buttonsText @parameter is an array that contains data that will be used to create buttons
    
    return (
        <div className={styles.introCard}>
            <h2 className={styles.introTitle}> {title} </h2>
            {/* This paragraph describes website contents and contains button links to navigate around */}
            <p className={styles.description}>
                {descTitle}
                <br /> <br />
                { 
                    buttonsText.length > 0 ? <ButtonLinks buttonsText={buttonsText}/>
                    : ''
                }
            </p>
        </div>
    )
}

export default IntroCard
