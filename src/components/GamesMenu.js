import GameCard from "./GameCard"
import GameButton from "./GameButton"
import styles from '../styles/mainPages.module.css'

const GamesMenu = ( { cardOrButton, infos } ) => {

    // Depending on the need:
    // GamesMenu component can contain clickable Cards
    // Or buttonLinks
    // infos @parameter is an array with objects containing data used to create the cards or buttons

    return (
        <div className={styles.gamesMenu}>
            { 
                cardOrButton === 'card' ? 
                infos.map((info) => (
                    <GameCard key={info.id} onClick={info.clickFunction} imgSource={info.imgSource} 
                    cardTitle={info.cardTitle} cardLink={info.link}/>
                 )) 
                : infos.map((info) => (
                    <GameButton key={info.id} onClick={info.clickFunction} buttonColor={info.buttonColor}
                    buttonText={info.buttonText} />
                ))
            }
        </div>
    )
}

export default GamesMenu
