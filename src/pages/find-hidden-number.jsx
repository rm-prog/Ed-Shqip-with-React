import { useState } from "react"

import styles from '../styles/logicGames.module.css'

import StartButton from "../components/StartButton"
import BackButton from "../components/BackButton"
import LogicGamesHeader from "../components/LogicGamesHeader"
import TableButtonCell from '../components/TableButtonCell'

import tableCellsTextArray from '../logic_games_data/find_hidden_number_game.json'

const FindHiddenNumber = () => {
    
    // Interval to count how many seconds took the user to win the game 
    let [timeCounter, setTimeCounter] = useState(null)
    let [seconds, setseconds] = useState(0)
    //  Which stage of the game is the user
    let [gameIndex, setGameIndex] = useState(0)

    let [correctClicks, setCorrectClicks] = useState(0)
    let [incorrectClicks, setIncorrectClicks] = useState(0)

    // HeaderTitle will change based on which number should the user find
    let [headerTitle, setHeaderTitle] = useState('Gjej numrin e fshehur')

    // The table before start and after the end should not be displayed
    let [tableDisplay, setTableDisplay] = useState(styles.displayNone)

    // At which position should the fidden number be placed
    const randomNum = Math.floor(Math.random() * 71) + 1
    // The position of the hidden number
    let [correctCellIndex, setCorrectCellIndex] = useState(randomNum)

    const tableCellText = (cellIndex) => {
        // Check if the position of the cell corresponds with the positon where the number should be hidden
        // If true display the hidden number on that cell
        // If false display the other letter 
        if (cellIndex === correctCellIndex) {
            if (tableCellsTextArray[gameIndex] === undefined) return
            return tableCellsTextArray[gameIndex].correct
        } else {
            if (tableCellsTextArray[gameIndex] === undefined) return
            return tableCellsTextArray[gameIndex].incorrect
        }
    }

    const tableButtonClick = (cellIndex) => {
        // Check if the user has clicked on the hidden number
        if (cellIndex === correctCellIndex) {
            // If true check if there are levels left
            if (tableCellsTextArray[gameIndex+1] === undefined) {
                // If true end game
                clearInterval(timeCounter)
                setseconds(`${seconds} sekonda. Klikime te sakta: ${correctClicks}. Klikime te gabuara ${incorrectClicks}`)
                setTableDisplay(styles.displayNone)
            } else {
                // Else go to next level
                correctClicks++
                setCorrectClicks(correctClicks)
                gameIndex++
                setGameIndex(gameIndex)
                setHeaderTitle(`Gjej numrin ${tableCellsTextArray[gameIndex].correct}`)
                let random = Math.floor(Math.random() * 71) + 1
                setCorrectCellIndex(random)
            }
        } else {
            // If false than penalise the user with time penalty
            incorrectClicks++
            setIncorrectClicks(incorrectClicks)
            seconds += 5 * incorrectClicks
            setseconds(seconds)
        }
    }

    const startGame = () => {
        setHeaderTitle(`Gjej numrin ${tableCellsTextArray[gameIndex].correct}`)
        setTableDisplay(styles.displayTable)
        // Start counting the seconds
        setTimeCounter(setInterval(myTimer, 1000))
    }

    const myTimer = () => {
        seconds++
        setseconds(seconds)
    }

    return (
        <div className={`${styles.pageBody} ${styles.blueLightBlueBg}`}>
            <LogicGamesHeader title={headerTitle}/>
            <br /> <br />
            <center>
                <StartButton text='Filloni Lojen' onClick={startGame}/>
                <br />
                <div className={styles.timeDisplay}>
                    {seconds} sekonda
                </div>
                <table className={tableDisplay}>
                    <tbody>
                        <tr>
                            <TableButtonCell text={tableCellText(0)} onClick={() => tableButtonClick(0)}/>
                            <TableButtonCell text={tableCellText(1)} onClick={() => tableButtonClick(1)}/>
                            <TableButtonCell text={tableCellText(2)} onClick={() => tableButtonClick(2)}/>
                            <TableButtonCell text={tableCellText(3)} onClick={() => tableButtonClick(3)}/>
                            <TableButtonCell text={tableCellText(4)} onClick={() => tableButtonClick(4)}/>
                            <TableButtonCell text={tableCellText(5)} onClick={() => tableButtonClick(5)}/>
                            <TableButtonCell text={tableCellText(6)} onClick={() => tableButtonClick(6)}/>
                            <TableButtonCell text={tableCellText(7)} onClick={() => tableButtonClick(7)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(8)} onClick={() => tableButtonClick(8)}/>
                            <TableButtonCell text={tableCellText(9)} onClick={() => tableButtonClick(9)}/>
                            <TableButtonCell text={tableCellText(10)} onClick={() => tableButtonClick(10)}/>
                            <TableButtonCell text={tableCellText(11)} onClick={() => tableButtonClick(11)}/>
                            <TableButtonCell text={tableCellText(12)} onClick={() => tableButtonClick(12)}/>
                            <TableButtonCell text={tableCellText(13)} onClick={() => tableButtonClick(13)}/>
                            <TableButtonCell text={tableCellText(14)} onClick={() => tableButtonClick(14)}/>
                            <TableButtonCell text={tableCellText(15)} onClick={() => tableButtonClick(15)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(16)} onClick={() => tableButtonClick(16)}/>
                            <TableButtonCell text={tableCellText(17)} onClick={() => tableButtonClick(17)}/>
                            <TableButtonCell text={tableCellText(18)} onClick={() => tableButtonClick(18)}/>
                            <TableButtonCell text={tableCellText(19)} onClick={() => tableButtonClick(19)}/>
                            <TableButtonCell text={tableCellText(20)} onClick={() => tableButtonClick(20)}/>
                            <TableButtonCell text={tableCellText(21)} onClick={() => tableButtonClick(21)}/>
                            <TableButtonCell text={tableCellText(22)} onClick={() => tableButtonClick(22)}/>
                            <TableButtonCell text={tableCellText(23)} onClick={() => tableButtonClick(23)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(24)} onClick={() => tableButtonClick(24)}/>
                            <TableButtonCell text={tableCellText(25)} onClick={() => tableButtonClick(25)}/>
                            <TableButtonCell text={tableCellText(26)} onClick={() => tableButtonClick(26)}/>
                            <TableButtonCell text={tableCellText(27)} onClick={() => tableButtonClick(27)}/>
                            <TableButtonCell text={tableCellText(28)} onClick={() => tableButtonClick(28)}/>
                            <TableButtonCell text={tableCellText(29)} onClick={() => tableButtonClick(29)}/>
                            <TableButtonCell text={tableCellText(30)} onClick={() => tableButtonClick(30)}/>
                            <TableButtonCell text={tableCellText(31)} onClick={() => tableButtonClick(31)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(32)} onClick={() => tableButtonClick(32)}/>
                            <TableButtonCell text={tableCellText(33)} onClick={() => tableButtonClick(33)}/>
                            <TableButtonCell text={tableCellText(34)} onClick={() => tableButtonClick(34)}/>
                            <TableButtonCell text={tableCellText(35)} onClick={() => tableButtonClick(35)}/>
                            <TableButtonCell text={tableCellText(36)} onClick={() => tableButtonClick(36)}/>
                            <TableButtonCell text={tableCellText(37)} onClick={() => tableButtonClick(37)}/>
                            <TableButtonCell text={tableCellText(38)} onClick={() => tableButtonClick(38)}/>
                            <TableButtonCell text={tableCellText(39)} onClick={() => tableButtonClick(39)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(40)} onClick={() => tableButtonClick(40)}/>
                            <TableButtonCell text={tableCellText(41)} onClick={() => tableButtonClick(41)}/>
                            <TableButtonCell text={tableCellText(42)} onClick={() => tableButtonClick(42)}/>
                            <TableButtonCell text={tableCellText(43)} onClick={() => tableButtonClick(43)}/>
                            <TableButtonCell text={tableCellText(44)} onClick={() => tableButtonClick(44)}/>
                            <TableButtonCell text={tableCellText(45)} onClick={() => tableButtonClick(45)}/>
                            <TableButtonCell text={tableCellText(46)} onClick={() => tableButtonClick(46)}/>
                            <TableButtonCell text={tableCellText(47)} onClick={() => tableButtonClick(47)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(48)} onClick={() => tableButtonClick(48)}/>
                            <TableButtonCell text={tableCellText(49)} onClick={() => tableButtonClick(49)}/>
                            <TableButtonCell text={tableCellText(50)} onClick={() => tableButtonClick(50)}/>
                            <TableButtonCell text={tableCellText(51)} onClick={() => tableButtonClick(51)}/>
                            <TableButtonCell text={tableCellText(52)} onClick={() => tableButtonClick(52)}/>
                            <TableButtonCell text={tableCellText(53)} onClick={() => tableButtonClick(53)}/>
                            <TableButtonCell text={tableCellText(54)} onClick={() => tableButtonClick(54)}/>
                            <TableButtonCell text={tableCellText(55)} onClick={() => tableButtonClick(55)}/>
                        </tr>
                        <tr>
                            <TableButtonCell text={tableCellText(56)} onClick={() => tableButtonClick(56)}/>
                            <TableButtonCell text={tableCellText(57)} onClick={() => tableButtonClick(57)}/>
                            <TableButtonCell text={tableCellText(58)} onClick={() => tableButtonClick(58)}/>
                            <TableButtonCell text={tableCellText(59)} onClick={() => tableButtonClick(59)}/>
                            <TableButtonCell text={tableCellText(60)} onClick={() => tableButtonClick(60)}/>
                            <TableButtonCell text={tableCellText(61)} onClick={() => tableButtonClick(61)}/>
                            <TableButtonCell text={tableCellText(62)} onClick={() => tableButtonClick(62)}/>
                            <TableButtonCell text={tableCellText(63)} onClick={() => tableButtonClick(63)}/>
                        </tr>
                        <tr>
                        <TableButtonCell text={tableCellText(64)} onClick={() => tableButtonClick(64)}/>
                        <TableButtonCell text={tableCellText(65)} onClick={() => tableButtonClick(65)}/>
                        <TableButtonCell text={tableCellText(66)} onClick={() => tableButtonClick(66)}/>
                        <TableButtonCell text={tableCellText(67)} onClick={() => tableButtonClick(67)}/>
                        <TableButtonCell text={tableCellText(68)} onClick={() => tableButtonClick(68)}/>
                        <TableButtonCell text={tableCellText(69)} onClick={() => tableButtonClick(69)}/>
                        <TableButtonCell text={tableCellText(70)} onClick={() => tableButtonClick(70)}/>
                        <TableButtonCell text={tableCellText(71)} onClick={() => tableButtonClick(71)}/>
                    </tr>
                    </tbody>
                </table>
                <br />
                <BackButton onClick={() => window.history.back()}/>
            </center>
        </div>
    )
}

export default FindHiddenNumber