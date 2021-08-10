import { useState, useRef } from 'react'
import styles from '../styles/wordGame.module.css'

import BackButton from './BackButton'
const WordGame = ( { words } ) => {

    const backHistory = () => {
        window.history.back()
    }

    let [gameStarted, setGameStarted] = useState(false)
    // answerDisplay contains text that notifies user if got the correct answer
    let [answerDisplay, setAnswerDisplay] = useState('')

    // Before the game starts startButton should be displayed then hidden
    let [displayStartButton, setDisplayStartButton] = useState(styles.displayBlock)

    // The enter and help button should be enabled after start Button is clicked 
    let [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
    let [disableHelpBtn, setDisableHelpBtn] = useState(true)

    // After game ends submitBtn, helpBtn, answerInput should be hidden
    let [displayBlock, setDisplayBlock] = useState(styles.displayBlock)
    let [displayTable, setDisplayTable] = useState(styles.displayTable)

    // Array containing words the user should find
    const [wordsArray, setWordsArray] = useState(words)

    // TD cells innerHtml values
    let [cellsInnerHtml, setCellsInnerHtml] = useState([
        '', '', '', '', '', '', '', '', ''
    ])

    // TD cells background colors
    let [cellsBgColor, setCellsBgColor] = useState([
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg,
        styles.whiteBg
    ])

    // index of current words
    let [arrayIndex, setArrayIndex] = useState(0)
    // crushedCells tells how many letters are found
    let [crushedCells, setCrushedCells] = useState(0)
    // how many helps has the user used to find the words
    let [helpsUsed, setHelpsUsed] = useState(0)

    const answerInput = useRef(null)

    const startGame = () => {
        // Enable Submit and Help Button and populate table cells with letters found in wordsArray
        // Hide Start Button
        setDisableSubmitBtn(false)
        setDisableHelpBtn(false)
        answerInput.current.value = ''
        setCellsInnerHtml(wordsArray[0].letters)
        setDisplayStartButton(styles.displayNone)
    }

    const submitWord = () => {
        // The variables below ||||||||||
        // How many words can the user find
        // User Input
        // The words the user needs to find
        // currentWords also contains the indexes of where the letters of the words are placed
        const numberOfWords = wordsArray[arrayIndex].numberOfWords
        const answerDisplayValue = answerInput.current.value.toUpperCase()
        const currentWords = wordsArray[arrayIndex]
        for (let i=0; i<numberOfWords; i++) {
            // Check if the users Answer corresponds with one of the words
            if (answerDisplayValue == currentWords.correctWords[i].theWord) {
                // Copy cellsBgColor, make changes to it and then assign it the value of newCellsBgColor 
                let newCellsBgColor = [...cellsBgColor]
                for (let j=0; j<9; j++) {
                    // Change bgColor of table cells where the letters of the word found are placed to grayColor
                    if (currentWords.correctWords[i].indexes.includes(j)) {
                        newCellsBgColor[j] = styles.grayBg
                    }
                }
                setCellsBgColor(newCellsBgColor)
                // Add to crushedCells the length of word found
                setCrushedCells(crushedCells += currentWords.correctWords[i].loopingVar)
                setCrushedCells(crushedCells)
                setAnswerDisplay('Sakte!')
                break
            } else if (i == numberOfWords - 1) {
                // If users answer is incorrect
                setAnswerDisplay(`Gabim! ${'<br>'} Fjala qe ju shkruajtet nuk ekziton ose nuk eshte ajo qe po kerkojme. ${'<br>'}Provoni perseri!`)
                break
            }
        }

        answerInput.current.value = ''
        // If all words of current round are found
        if (crushedCells >= 9) {
            // If no more rounds
            if (wordsArray[arrayIndex + 1] === undefined) {
                // Hide submit and help button, input field
                setDisplayBlock(styles.displayNone)
                setDisplayTable(styles.displayNone)
                setAnswerDisplay(`Bravo! Arritet t'i gjenit te gjitha fjalet. Ndihma te perdorura ${helpsUsed}`)
            } else {
                // Go to next Round
                setArrayIndex(arrayIndex++)
                setArrayIndex(arrayIndex)
                // Change the tableCells letters according to new level
                setCellsInnerHtml(words[arrayIndex].letters)
                // Reset tableCells bgColor to white
                setCellsBgColor([
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg,
                    styles.whiteBg
                ])
                setDisableHelpBtn(false)
            }
            setCrushedCells(0)
        }
    }

    const needHelp = () => {
        const randomIndex = Math.floor(Math.random() * (wordsArray[arrayIndex].numberOfWords - 1))
        answerInput.current.value = wordsArray[arrayIndex].correctWords[randomIndex].theWord
        setHelpsUsed(helpsUsed++)
        setHelpsUsed(helpsUsed)
        setDisableHelpBtn(true)
    }

    return (
        <div className={`${styles.pageBody} ${styles.blueGreenBg}`}>
            <div className={styles.header}> Krijoni fjale me shkronjat e meposhtme </div>
            <br /> <br />
            <center className={styles.centerDiv}>
                <div className={styles.displayAnswer}>
                    {answerDisplay}
                    <span className={`${styles.warningSpan} ${displayStartButton}`}>Lejohet vetem nje ndihme per raund</span>
                    <br />
                    <button className={`${styles.startButton} ${displayStartButton}`} onClick={() => startGame()}>Filloni lojen</button>
                </div>
                <br /> <br />
                <table className={`${styles.wordContainer} ${displayTable}`}>
                    <tbody>
                    <tr>
                        <td className={cellsBgColor[0]}>{cellsInnerHtml[0]}</td>
                        <td className={cellsBgColor[1]}>{cellsInnerHtml[1]}</td>
                        <td className={cellsBgColor[2]}>{cellsInnerHtml[2]}</td>
                    </tr>
                    <tr>
                        <td className={cellsBgColor[3]}>{cellsInnerHtml[3]}</td>
                        <td className={cellsBgColor[4]}>{cellsInnerHtml[4]}</td>
                        <td className={cellsBgColor[5]}>{cellsInnerHtml[5]}</td>
                    </tr>
                    <tr>
                        <td className={cellsBgColor[6]}>{cellsInnerHtml[6]}</td>
                        <td className={cellsBgColor[7]}>{cellsInnerHtml[7]}</td>
                        <td className={cellsBgColor[8]}>{cellsInnerHtml[8]}</td>
                    </tr>
                    </tbody>
                </table>
                <br /> <br />
                <label htmlFor='answer-input' className={displayBlock}>Shkruani fjalet ketu</label>
                <input id='answer-input' type="text" className={displayBlock} ref={answerInput}></input>
                <br /> <br />
                <button className={`${styles.submitButton} ${displayBlock}`} onClick={() => submitWord()}disabled={disableSubmitBtn}>Enter</button>
                <button className={`${styles.helpButton} ${displayBlock}`} onClick={() => needHelp()} disabled={disableHelpBtn}>Ndihme</button>
                <br /> <br />
                <BackButton onClick={() => backHistory()}/>
            </center>
        </div>
    )
}

export default WordGame
