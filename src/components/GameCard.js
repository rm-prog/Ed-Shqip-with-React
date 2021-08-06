import styles from '../styles/mainPages.module.css'
import { Link } from 'react-router-dom'

const GameCard = ( { onClick, imgSource, cardTitle, cardLink } ) => {

    // Clickable Card

    return (
        <div className={styles.card} onClick={onClick}>
            <img src={imgSource} alt="Avatar" style={ { width: '100%', height: '210px' }} />
            <div className="container">
                <h3><b> {cardTitle} </b></h3>
                {/* Link components replaces <a> </a>*/}
                {/* Link component sents user to another Route*/}
                <Link to={cardLink}> Filloni Lojen </Link>
            </div>
        </div>
    )
}

export default GameCard
