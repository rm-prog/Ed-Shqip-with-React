import styles from '../styles/mainPages.module.css'

const BackButton = ( { onClick } ) => {
    return (
        <button onClick={onClick} className={styles.backButton}> &lt; Kthehu </button>
    )
}

export default BackButton
