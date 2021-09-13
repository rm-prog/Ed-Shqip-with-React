import { useState, useRef } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from "../StartButton"
import NextButton from './NextButton'

import lettersArray from '../../logic_games_data/remember_letters_game.json'

const GameField = () => {

    let [gameIndex, setGameIndex] = useState(0)

    let [startBtnDisplay, setStartBtnDisplay] = useState(styles.displayBlock)

    let [timeDisplay, setTimeDisplay] = useState('')
    let [letters, setLetters] = useState('')

    let inputField = useRef(null)
    let [disableNextBtn, setDisableNextBtn] = useState(true)

    let [timeoutFunction, setTimeoutFunction] = useState(null) 
    let [intervalFunction, setIntervalFunction] = useState(null) 

    let [correctAnswers, setCorrectAnswers] = useState(0)
    let [incorrectAnswers, setIncorrectAnswers] = useState(0)

    const startGame = () => {
        setStartBtnDisplay(styles.displayNone)
        setTimeDisplay('')
        setLetters(`Mbaj mend -> ${lettersArray[gameIndex]}`)
        setTimeoutFunction(setTimeout(countdownStart, 4000))
    }

    const nextLevel = () => {
        if (lettersArray[gameIndex+1] != undefined) {
            gameIndex++
            setGameIndex(gameIndex)
            setTimeDisplay('')
            setLetters(`Mbaj mend -> ${lettersArray[gameIndex]}`)
            setDisableNextBtn(true)
            setTimeoutFunction(setTimeout(countdownStart, 4000))
        } else {
            setDisableNextBtn(true)
            setLetters('')
            setTimeDisplay(`Loja mbaroi. ${correctAnswers} nivele te kaluara. ${incorrectAnswers} gabime.`)
        }
    }

    const countdownStart = () => {
        inputField.current.disabled = false
        inputField.current.value = ''
        inputField.current.focus()
        startCountdown()
    }
    
    const startCountdown = () => {
        let seconds = lettersArray[gameIndex].length+1
        setLetters('Tani shkruaji')
        setTimeDisplay(`${seconds} sekonda`)
        setIntervalFunction(setInterval(() => {
            countdown(seconds)
            seconds--
        }, 1000))
    }

    const countdown = (seconds) => {
        console.log(seconds)
        if (seconds === 0) {
            clearInterval(intervalFunction)
            setTimeDisplay('Koha mbaroi. Vazhdo me nivelin tjeter.')
            setLetters('')
            setDisableNextBtn(false)
            inputField.current.disabled = true
            inputField.current.value = ''
            incorrectAnswers++
            setIncorrectAnswers(incorrectAnswers)
        } else {
            setTimeDisplay(`${seconds} sekonda`)
        }
    } 

    const enterInput = (event) => {
        if (event.key === 'Enter') {
            if (inputField.current.value.toUpperCase() === lettersArray[gameIndex]) {
                clearInterval(intervalFunction)
                clearTimeout(timeoutFunction)
                setTimeoutFunction(null)
                setIntervalFunction(null)
                setTimeDisplay('Bravo. Vazhdo me nivelin tjeter')
                setLetters('')
                setDisableNextBtn(false)
                inputField.current.disabled = true
                inputField.current.value = ''
                correctAnswers++
                setCorrectAnswers(correctAnswers)
            } else {
                clearInterval(intervalFunction)
                clearTimeout(timeoutFunction)
                setIntervalFunction(null)
                setTimeoutFunction(null)
                setTimeDisplay('Gabim. Vazhdo me nivelin tjeter')
                setLetters('')
                setDisableNextBtn(false)
                inputField.current.disabled = true
                inputField.current.value = ''
                incorrectAnswers++
                setIncorrectAnswers(incorrectAnswers)
            }
        }
    }

    const instructionStyle = {
        fontSize: '1.4rem'
    }

    const timeDisplayStyle = {
        fontSize: '1.3rem'
    }

    const lettersStyle = {
        fontSize: '1.3rem',
    }

    return (
        <div>
            <span style={instructionStyle}>
                    Mbani mend shkronjat dhe pastaj shkruajini poshte pa mbaruar koha
            </span> <br /> <br />
            <StartButton onClick={startGame} display={startBtnDisplay}/> <br />
            <div style={timeDisplayStyle}>
                {timeDisplay}
            </div> <br /> <br/>
            <div style={lettersStyle}>
                {letters}
            </div> <br />
            <label for='player-input'>
                Shkruani shkronjat ketu:
            </label>
            <input id='player-input' ref={inputField} disabled={true} onKeyUp={(event) => {
                enterInput(event)
            }}/> <br /> <br />
            <NextButton onClick={nextLevel} disabled={disableNextBtn}/>
        </div>
    )
}

export default GameField
