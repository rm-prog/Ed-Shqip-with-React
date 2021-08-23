import styles from '../../styles/index.module.css'

// !!! Used as header only for home page

const Header = ( { text } ) => {
    return (
        <div className={styles.header}>
            {text}
        </div>
    )
}

export default Header
