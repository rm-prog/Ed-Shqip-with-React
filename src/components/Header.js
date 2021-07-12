import styles from '../index.module.css'


const Header = ( { text } ) => {
    return (
        <div className={styles.header}>
            {text}
        </div>
    )
}

export default Header
