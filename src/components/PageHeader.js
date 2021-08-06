import styles from '../styles/mainPages.module.css'

// !!! Used as header not for the home page

const PageHeader = ( { headerColor, title } ) => {
    return (
        <div className={`${styles.header} ${headerColor}`}>
            {title}
        </div>
    )
}

export default PageHeader
