import { useState, useRef } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from '../StartButton'
import TableButtonCell from '../TableButtonCell'

import gameData from '../../logic_games_data/light_to_dark_game.json'

const GameField = () => {

    // State Variables

    let [gameIndex, setGameIndex] = useState(0)
    let [currentLevel, setCurrentLevel] = useState(gameData[gameIndex].colorAndOrder)

    let [answerDisplayText, setAnswerDisplayText] = useState('Lexoni mire kerkesen para cdo raundi. Shtypni ngjyrat nga me e hapura tek me e mbyllura')

    let [secondsLeft, setSecondsLeft] = useState(16)
    let [timeDisplay, setTimeDisplay] = useState(`${secondsLeft} sekonda kohe`)

    let [startBtnText, setStartBtnText] = useState('Fillon Lojen')
    let [disableStartBtn, setDisableStartBtn] = useState(false)

    let [correctColorIndex, setCorrectColorIndex] = useState(0)
    let [roundsWon, setRoundsWon] = useState(0)
    let [mistakes, setMistakes] = useState(0)

    let [displayTable, setDisplayTable] = useState('none')
    let [tableButtonsText, setTableButtonsText] = useState([
        '','','','','','','','','','','', ''
    ])
    let [tableButtonsDisable, setTableButtonsDisable] = useState([
        false, false, false, false, false, false, 
        false, false, false, false, false, false
    ])
    let [tableButtonsStyle, setTableButtonsStyle] = useState([
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'}
    ]) 

    let [timeoutFunction, setTimeoutFunction] = useState(null)
    let interval = useRef(null)

    // Functions

    const shuffleArray = (arra1) => {
        var ctr = arra1.length,
        temp,
        index;
  
        // While there are elements in the array
        while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
        return arra1;
    }

    const startGame = () => {
        setStartBtnText('Next')
        interval.current = setInterval(timer, 1000)
        setDisplayTable('table')
        setTableButtonsDisable([
            false, false, false, false, false, false, 
            false, false, false, false, false, false
        ])
        setTableButtonsText([
            '','','','','','','','','','','', ''
        ])
        setCorrectColorIndex(0)
        setDisableStartBtn(true)
        shuffleArray(currentLevel)
        setCurrentLevel(currentLevel)
        setTableButtonsStyle([
            { backgroundColor: currentLevel[0].color, color: currentLevel[0].buttonColor},
            { backgroundColor: currentLevel[1].color, color: currentLevel[1].buttonColor},
            { backgroundColor: currentLevel[2].color, color: currentLevel[2].buttonColor},
            { backgroundColor: currentLevel[3].color, color: currentLevel[3].buttonColor},
            { backgroundColor: currentLevel[4].color, color: currentLevel[4].buttonColor},
            { backgroundColor: currentLevel[5].color, color: currentLevel[5].buttonColor},
            { backgroundColor: currentLevel[6].color, color: currentLevel[6].buttonColor},
            { backgroundColor: currentLevel[7].color, color: currentLevel[7].buttonColor},
            { backgroundColor: currentLevel[8].color, color: currentLevel[8].buttonColor},
            { backgroundColor: currentLevel[9].color, color: currentLevel[9].buttonColor},
            { backgroundColor: currentLevel[10].color, color: currentLevel[10].buttonColor},
            { backgroundColor: currentLevel[11].color, color: currentLevel[11].buttonColor}
        ])
        console.log(currentLevel)
    }

    const timer = () => {
        secondsLeft--
        setSecondsLeft(secondsLeft)
        setTimeDisplay(`${secondsLeft} sekonda kohe`)
        if (secondsLeft === 0) {
            setAnswerDisplayText('Koha mbaroi. Vazhdo me nivelin tjeter')
            if (gameData[gameIndex+1] != undefined) {
                setTimeoutFunction(setTimeout(nextLevel, 1500))
            } else {
                setTimeoutFunction(setTimeout(endGame, 1500))
            }
            clearInterval(interval.current)
        }
    }

    const nextLevel = () => {
        gameIndex++
        setGameIndex(gameIndex)
        setCurrentLevel(gameData[gameIndex].colorAndOrder)
        setSecondsLeft(16)
        setDisableStartBtn(false)
        setDisplayTable('none')
        if (gameData[gameIndex].orderDirection === 'light to dark') {
            setAnswerDisplayText('Shtypni ngjyrat nga me e hapura tek me e mbyllura')
        } else {
            setAnswerDisplayText('!!Tani shtypni ngjyrat nga e mbyllura tek me e hapura!!')
        }
    }

    const endGame = () => {
        setDisplayTable('none')
        setDisableStartBtn(true)
        setTimeDisplay('')
        setAnswerDisplayText(`Loja mbaroi. Kaluat ${roundsWon} nga 3 nivele. Keni bere ${mistakes} gabime`)
    }
 
    const btnClick = (buttonIndex, buttonValue) => {
        console.log(currentLevel[correctColorIndex])
        console.log(correctColorIndex)
        if (buttonValue != correctColorIndex) {
            setAnswerDisplayText('Gabim!')
            mistakes++
            setMistakes(mistakes)
        } else {
            setAnswerDisplayText('Sakte!')
            tableButtonsDisable[buttonIndex] = true
            setTableButtonsDisable(tableButtonsDisable)
            let correctIndex = correctColorIndex
            tableButtonsText[buttonIndex] = correctIndex
            correctColorIndex++
            setCorrectColorIndex(correctColorIndex)
            if (correctColorIndex === 12) {
                roundsWon++
                setRoundsWon(roundsWon)
                setDisplayTable('none')
                setAnswerDisplayText('Bravo! Tani kaloni ne raundin tjeter')
                clearInterval(interval.current)
                if (gameData[gameIndex+1] != undefined) {
                    setTimeoutFunction(setTimeout(nextLevel, 1500))
                } else {
                    setTimeoutFunction(setTimeout(endGame, 1500))
                }
            } 
        }
    }

    // CSS styles

    const answerDisplayStyle = {
        fontSize: '2.1rem'
    }

    const timeDisplayStyle = {
        fontSize: '1.3rem'
    }

    return (
        <div>
            <div style={answerDisplayStyle}>
                {answerDisplayText}
            </div> <br />
            <div style={timeDisplayStyle}>
                {timeDisplay}
            </div> <br />
            <StartButton text={startBtnText} onClick={startGame} disabled={disableStartBtn}/> <br /> <br />
            <table style={{display: displayTable}}>
                <tbody>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[0]} disabled={tableButtonsDisable[0]} buttonStyle={tableButtonsStyle[0]} onClick={() => btnClick(0, currentLevel[0].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[1]} disabled={tableButtonsDisable[1]} buttonStyle={tableButtonsStyle[1]} onClick={() => btnClick(1, currentLevel[1].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[2]} disabled={tableButtonsDisable[2]} buttonStyle={tableButtonsStyle[2]} onClick={() => btnClick(2, currentLevel[2].order)}/>
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[3]} disabled={tableButtonsDisable[3]} buttonStyle={tableButtonsStyle[3]} onClick={() => btnClick(3, currentLevel[3].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[4]} disabled={tableButtonsDisable[4]} buttonStyle={tableButtonsStyle[4]} onClick={() => btnClick(4, currentLevel[4].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[5]} disabled={tableButtonsDisable[5]} buttonStyle={tableButtonsStyle[5]} onClick={() => btnClick(5, currentLevel[5].order)}/>
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[6]} disabled={tableButtonsDisable[6]} buttonStyle={tableButtonsStyle[6]} onClick={() => btnClick(6, currentLevel[6].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[7]} disabled={tableButtonsDisable[7]} buttonStyle={tableButtonsStyle[7]} onClick={() => btnClick(7, currentLevel[7].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[8]} disabled={tableButtonsDisable[8]} buttonStyle={tableButtonsStyle[8]} onClick={() => btnClick(8, currentLevel[8].order)}/>
                    </tr>
                    <tr>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[9]} disabled={tableButtonsDisable[9]} buttonStyle={tableButtonsStyle[9]} onClick={() => btnClick(9, currentLevel[9].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[10]} disabled={tableButtonsDisable[10]} buttonStyle={tableButtonsStyle[10]} onClick={() => btnClick(10, currentLevel[10].order)}/>
                        <TableButtonCell buttonClass={styles.tableButton2} text={tableButtonsText[11]} disabled={tableButtonsDisable[11]} buttonStyle={tableButtonsStyle[11]} onClick={() => btnClick(11, currentLevel[11].order)}/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameField
