import { useState } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from '../StartButton'
import TableButtonCell from '../TableButtonCell'

import gameData from '../../logic_games_data/tap_different_button_game.json'

const GameField = () => {

    // State Variables

    let [correctAnswerText, setCorrectAnswerText] = useState('')

    let [disableStartBtn, setDisableStartBtn] = useState(false)
    let [startBtnText, setStartBtnText] = useState('Filloni Lojen')

    let [tableDisplay, setTableDisplay] = useState('none')

    let [gameIndex, setGameIndex] = useState(0)
    let [correctCellIndex, setCorrectCellIndex] = useState(0)

    let [correctClicks, setCorrectClicks] = useState(0)
    let [incorrectClicks, setIncorrectClicks] = useState(0)

    let [endGameFunction, setEndGameFunction] = useState(null)

    // Functions

    const startGame = () => {
        setTableDisplay('table')
        setCorrectCellIndex(Math.floor(Math.random() * 71) + 1)
        setDisableStartBtn(true)
        setStartBtnText('Next')
    }   

    const tableButtonStyle = (buttonIndex) => {
        if (buttonIndex != correctCellIndex) {
            return incorrectCellStyle
        } else {
            return correctCellStyle
        }
    }

    const tableButtonClick = (buttonIndex) => {
        if (buttonIndex != correctCellIndex) {
            setCorrectAnswerText('Gabim! Vazhdo me nivelin tjeter')
            incorrectClicks++
            setIncorrectClicks(incorrectClicks)
        } else {
            setCorrectAnswerText('Sakte! Vazhdo me nivelin tjeter')
            correctClicks++
            setCorrectClicks(correctClicks)
        }

        if (gameData[gameIndex+1] == undefined) {
            setEndGameFunction(setTimeout(endGame, 1000))
        } else {
            gameIndex++
            setGameIndex(gameIndex)
            setDisableStartBtn(false)
            setTableDisplay('none')
        }
    }

    const endGame = () => {
        setCorrectAnswerText(`Loja mbaroi. Ju kaluat ${correctClicks} nivele. Keni bere ${incorrectClicks} gabime`)
        setTableDisplay('none')
        setDisableStartBtn(true)
    }

    // CSS styles

    const correctAnswerStyle = {
        position: 'relative',
        bottom: '20px',
        display: 'block',
        fontSize: '1.3rem'
    }

    const correctCellStyle = {
        backgroundColor: gameData[gameIndex].correct
    }

    const incorrectCellStyle = {
        backgroundColor: gameData[gameIndex].incorrect
    }

    return (
        <div>
            <div style={correctAnswerStyle}> 
                {correctAnswerText}
            </div> <br />
            <StartButton disabled={disableStartBtn} onClick={startGame} text={startBtnText} /> <br /> <br />
            <table style={{ display: tableDisplay }}>
                <tbody>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(0)} onClick={() => tableButtonClick(0)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(1)} onClick={() => tableButtonClick(1)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(2)} onClick={() => tableButtonClick(2)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(3)} onClick={() => tableButtonClick(3)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(4)} onClick={() => tableButtonClick(4)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(5)} onClick={() => tableButtonClick(5)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(6)} onClick={() => tableButtonClick(6)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(7)} onClick={() => tableButtonClick(7)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(8)} onClick={() => tableButtonClick(8)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(9)} onClick={() => tableButtonClick(9)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(10)} onClick={() => tableButtonClick(10)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(11)} onClick={() => tableButtonClick(11)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(12)} onClick={() => tableButtonClick(12)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(13)} onClick={() => tableButtonClick(13)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(14)} onClick={() => tableButtonClick(14)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(15)} onClick={() => tableButtonClick(15)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(16)} onClick={() => tableButtonClick(16)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(17)} onClick={() => tableButtonClick(17)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(18)} onClick={() => tableButtonClick(18)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(19)} onClick={() => tableButtonClick(19)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(20)} onClick={() => tableButtonClick(20)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(21)} onClick={() => tableButtonClick(21)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(22)} onClick={() => tableButtonClick(22)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(23)} onClick={() => tableButtonClick(23)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(24)} onClick={() => tableButtonClick(24)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(25)} onClick={() => tableButtonClick(25)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(26)} onClick={() => tableButtonClick(26)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(27)} onClick={() => tableButtonClick(27)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(28)} onClick={() => tableButtonClick(28)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(29)} onClick={() => tableButtonClick(29)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(30)} onClick={() => tableButtonClick(30)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(31)} onClick={() => tableButtonClick(31)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(32)} onClick={() => tableButtonClick(32)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(33)} onClick={() => tableButtonClick(33)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(34)} onClick={() => tableButtonClick(34)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(35)} onClick={() => tableButtonClick(35)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(36)} onClick={() => tableButtonClick(36)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(37)} onClick={() => tableButtonClick(37)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(38)} onClick={() => tableButtonClick(38)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(39)} onClick={() => tableButtonClick(39)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(40)} onClick={() => tableButtonClick(40)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(41)} onClick={() => tableButtonClick(41)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(42)} onClick={() => tableButtonClick(42)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(43)} onClick={() => tableButtonClick(43)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(44)} onClick={() => tableButtonClick(44)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(45)} onClick={() => tableButtonClick(45)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(46)} onClick={() => tableButtonClick(46)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(47)} onClick={() => tableButtonClick(47)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(48)} onClick={() => tableButtonClick(48)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(49)} onClick={() => tableButtonClick(49)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(50)} onClick={() => tableButtonClick(50)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(51)} onClick={() => tableButtonClick(51)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(52)} onClick={() => tableButtonClick(52)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(53)} onClick={() => tableButtonClick(53)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(54)} onClick={() => tableButtonClick(54)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(55)} onClick={() => tableButtonClick(55)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(56)} onClick={() => tableButtonClick(56)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(57)} onClick={() => tableButtonClick(57)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(58)} onClick={() => tableButtonClick(58)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(59)} onClick={() => tableButtonClick(59)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(60)} onClick={() => tableButtonClick(60)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(61)} onClick={() => tableButtonClick(61)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(62)} onClick={() => tableButtonClick(62)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(63)} onClick={() => tableButtonClick(63)} />
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(64)} onClick={() => tableButtonClick(64)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(65)} onClick={() => tableButtonClick(65)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(66)} onClick={() => tableButtonClick(66)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(67)} onClick={() => tableButtonClick(67)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(68)} onClick={() => tableButtonClick(68)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(69)} onClick={() => tableButtonClick(69)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(70)} onClick={() => tableButtonClick(70)} />
                        <TableButtonCell buttonClass={styles.tableButton2} buttonStyle={tableButtonStyle(71)} onClick={() => tableButtonClick(71)} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameField
