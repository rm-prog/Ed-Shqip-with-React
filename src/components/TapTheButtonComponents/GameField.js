import { useState } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from '../StartButton'
import AltButton from './AltButton'

import gameColors from '../../logic_games_data/tap_the_button_game.json'
import { shuffleArray } from '../../Functions'

const GameField = () => {

    // State Variables

    let [startBtnDisplay, setStartBtnDisplay] = useState(styles.displayBlock)

    let [seconds, setSeconds] = useState(0)
    let [timeDisplay, setTimeDisplay] = useState(`${seconds} sekonda`)

    let [instructionColor, setInstructionColor] = useState('black')
    let [instructionText, setInstructionText] = useState('')

    let [altButtonsDisabled, setAltButtonsDisabled] = useState([
        true, true, true
    ])
    let [altButtonsCorrect, setAltButtonsCorrect] = useState([
        false, false, false
    ])
    let [altButtonsText, setAltButtonsText] = useState([
        '', '', ''
    ])
    let [altButtonsColor, setAltButtonsColor] = useState([
        'black', 'black', 'black'
    ])

    let [correctClicks, setCorrectClicks] = useState(0)
    let [incorrectClicks, setIncorrectClicks] = useState(0)
    let [gameIndex, setGameIndex] = useState(0)

    let [intervalFunction, setIntervalFunction] = useState(null)

    // Functions

    const generateRandomColor = (min, max) => {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (gameColors.correctOrNotButton[gameIndex].bgColor == gameColors.randomColors[num]) {
            generateRandomColor(min, max)
        } else {
            return num
        }
    }

    const startNewLevel = () => {
        // tapButton is a boolean which determines if the randomIndex altButton should be clicked or not
        const tapButton = Math.random() < 0.5
        const randomIndex = Math.floor(Math.random() * 3)
        shuffleArray(gameColors.randomColors)
        setAltButtonsText(['', '', ''])
        if (!tapButton) {
            setInstructionText(`Mos shtypni butonin ${gameColors.correctOrNotButton[gameIndex].inAlbanian}`)
            altButtonsCorrect = [true, true, true]
            // clicking any of the buttons passes you to the next level expect the random index one
            altButtonsCorrect[randomIndex] = false
            setAltButtonsCorrect(altButtonsCorrect)
            // Give the non randomIndex altButtons random colors
            if (randomIndex === 0) {
                altButtonsColor[1] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[2] = gameColors.randomColors[generateRandomColor(6, 11)]
            } else if (randomIndex === 1) {
                altButtonsColor[0] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[2] = gameColors.randomColors[generateRandomColor(6, 11)]
            } else {
                altButtonsColor[0] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[1] = gameColors.randomColors[generateRandomColor(6, 11)]
            }
            // set the randomIndex altButton the color corresponding to the raund of the current game
            altButtonsColor[randomIndex] = gameColors.correctOrNotButton[gameIndex].bgColor
            setAltButtonsColor(altButtonsColor)
        } else {
            setInstructionText(`Shtypni butonin ${gameColors.correctOrNotButton[gameIndex].inAlbanian}`)
            altButtonsCorrect = [false, false, false]
            // clicking any of the buttons is a mistake expect the randomIndex altButton
            altButtonsCorrect[randomIndex] = true
            setAltButtonsCorrect(altButtonsCorrect)
            // Give the non randomIndex altButton random colors
            if (randomIndex === 0) {
                altButtonsColor[1] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[2] = gameColors.randomColors[generateRandomColor(6, 11)]
            } else if (randomIndex === 1) {
                altButtonsColor[0] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[2] = gameColors.randomColors[generateRandomColor(6, 11)]
            } else {
                altButtonsColor[0] = gameColors.randomColors[generateRandomColor(0, 4)]
                altButtonsColor[1] = gameColors.randomColors[generateRandomColor(6, 11)]
            }
            // set the randomIndex altButton the color corresponding to the raund of the current game
            altButtonsColor[randomIndex] = gameColors.correctOrNotButton[gameIndex].bgColor
            setAltButtonsColor(altButtonsColor)
        }
        // Give the instruction text a random color in order to confuse the player
        setInstructionColor(gameColors.randomColors[Math.floor(Math.random() * 11)])
    }

    const startGame = () => {
        setAltButtonsDisabled([false, false, false])
        setStartBtnDisplay(styles.displayNone)
        // Start counting the time until game finishes
        setIntervalFunction(setInterval(timer, 1000))
        shuffleArray(gameColors.correctOrNotButton)
        startNewLevel()
    }

    const timer = () => {
        seconds++
        setSeconds(seconds)
        setTimeDisplay(`${seconds} sekonda`)
    }

    const altBtnClick = (correctBtn, btnIndex) => {
        if (!correctBtn) {
            // If user clicks the wrong button dont go to next level but give the player another chance until he clicks the right button
            altButtonsText[btnIndex] = 'Gabim'
            setAltButtonsText(altButtonsText)
            incorrectClicks++
            setIncorrectClicks(incorrectClicks)
            seconds += 5 * incorrectClicks
            setSeconds(seconds)
        } else {
            if (gameColors.correctOrNotButton[gameIndex+1] != undefined) {
                gameIndex++
                setGameIndex(gameIndex)
                startNewLevel()
            } else {
                // Game Over. Give the results
                setAltButtonsDisabled([true, true, true])
                // Stop counting the time
                clearInterval(intervalFunction)
                setInstructionColor('black')
                setInstructionText(`Loja mbaroi. ${correctClicks} klikime te sakta. ${incorrectClicks} gabime`)
                setAltButtonsColor('black', 'black', 'black')
            }
            correctClicks++
            setCorrectClicks(correctClicks)
        }
    }

    // CSS styles

    const timeDisplayStyle = {
        fontSize: '1.3rem',
        margin : '8px'
    }

    const buttonsContainerStyle = {
        display: '-moz-inline-grid',
        gridTemplateColumns: 'auto'
    }

    return (
        <div>
            <StartButton display={startBtnDisplay} onClick={startGame}/> <br />
            <div style={timeDisplayStyle}>
                {timeDisplay}
            </div> <br /> <br />
            <h2 style={{ color: instructionColor }}>
                {instructionText}
            </h2> <br />
            <div style={buttonsContainerStyle}>
                <AltButton bgColor={altButtonsColor[0]} disabled={altButtonsDisabled[0]} text={altButtonsText[0]} onClick={() => altBtnClick(altButtonsCorrect[0], 0)} />
                <AltButton bgColor={altButtonsColor[1]} disabled={altButtonsDisabled[1]} text={altButtonsText[1]} onClick={() => altBtnClick(altButtonsCorrect[1], 1)} />
                <AltButton bgColor={altButtonsColor[2]} disabled={altButtonsDisabled[2]} text={altButtonsText[2]} onClick={() => altBtnClick(altButtonsCorrect[2], 2)} />
            </div> <br />
        </div>
    )
}

export default GameField
