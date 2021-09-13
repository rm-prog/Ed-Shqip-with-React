import { useState, useRef } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from '../StartButton'
import GridItem from '../GridItem'

const GameField = () => {

    // State Variables

    let [correctAnswerText, setCorrectAnswerText] = useState('Diferenca midis pergjigjes se sakte dhe pergjigjes tuaj maksimumi mund te jete 3')

    let [startBtnText, setStartBtnText] = useState('Filloni Lojen')
    let [disableStartBtn, setDisableStartBtn] = useState(false)

    let [correctPercentage, setCorrectPercentage] = useState(0)
    let [numberOfGames, setNumberOfGames] = useState(0)

    let [correctAnswerDifference, setCorrectAnswerDifference] = useState(0)
    // Reference to DOM elements

    let inputField = useRef(null)

    // Functions

    const startNextBtnClick = () => {
        if (numberOfGames < 8) {
            numberOfGames++
            setNumberOfGames(numberOfGames)
            setStartBtnText('Next')
            setDisableStartBtn(true)
            inputField.current.value = ''
            setCorrectPercentage(Math.floor(Math.random() * 99) + 1)
        } else {
            setDisableStartBtn(true)
            inputField.current.value = 'Loja Mbaroi!!'
            setCorrectAnswerText(`Diferenca midis pergjigjeve te sakta dhe pergjigjeve tuaja: ${correctAnswerDifference}`)
        }
        
    }

    const clickNumber = (number) => {
        inputField.current.value += number
    }

    const clearInputField = () => {
        inputField.current.value = ''
    }

    const enterGuess = () => {
        if (disableStartBtn) {
            let playerGuess = inputField.current.value
            setCorrectAnswerText(`Pergjigja e sakte: ${correctPercentage+1}; \n
                                Pergjigja juaj: ${playerGuess};
                                Diferenca: ${correctPercentage+1 > playerGuess ? (correctPercentage+1) - playerGuess : playerGuess - (correctPercentage+1)}`)
            correctAnswerDifference += correctPercentage+1 > playerGuess ? correctPercentage+1 - playerGuess : playerGuess - correctPercentage+1
            setCorrectAnswerDifference(correctAnswerDifference)
            setDisableStartBtn(false)
            setCorrectPercentage(0)
        }
    }

    const tableCellBgColor = (index) => {
        // Function determines the bg color of the cell...
        // Depending on how much of the percentage bar should be filled
        if (index+1 > correctPercentage) {
            return styles.limeCell
        } else {
            return styles.redCell
        }
    }

    // CSS styles

    const correctAnswerStyle = {
        fontSize: '1.3rem',
    }

    const clearButtonStyle = {
        color: 'red',
        padding: '19px',
        width: '80px',
        height: '80px'
    }

    const enterButtonStyle = {
        color: 'green',
        fontSize: '25px',
        padding: '8px',
        width: '80px',
        height: '80px'
    }

    const largeGridItems = {
        padding: '20px',
        width: '80px',
        height: '80px'
    }

    const percentageBarStyle = {
        display: 'inline-block',
        borderCollapse: 'collapse',
        borderWidth: '1px'
    }

    const tdCellStyle = {
        width: '1px',
        height: '40px',
        border: 'none',
        padding: '1px',
        boxSizing: 'content-box'
    }

    return (
        <div>
            <div style={correctAnswerStyle}>
                {correctAnswerText}
            </div> <br />
            <StartButton onClick={startNextBtnClick} text={startBtnText} disabled={disableStartBtn}/> <br /> <br />
            <label for='output-value'>%</label>
            <input id='output-value' ref={inputField} readOnly={true}/> <br /> <br />
            <div className={styles.calculatorContainer}>
                <GridItem text='1' style={largeGridItems} onClick={() => clickNumber(1)} />
                <GridItem text='2' style={largeGridItems} onClick={() => clickNumber(2)} />
                <GridItem text='3' style={largeGridItems} onClick={() => clickNumber(3)} />
                <GridItem text='4' style={largeGridItems} onClick={() => clickNumber(4)} />
                <GridItem text='5' style={largeGridItems} onClick={() => clickNumber(5)} />
                <GridItem text='6' style={largeGridItems} onClick={() => clickNumber(6)} />
                <GridItem text='7' style={largeGridItems} onClick={() => clickNumber(7)} />
                <GridItem text='8' style={largeGridItems} onClick={() => clickNumber(8)} />
                <GridItem text='9' style={largeGridItems} onClick={() => clickNumber(9)} />
                <GridItem text='C' style={clearButtonStyle} onClick={clearInputField} />
                <GridItem text='0' style={largeGridItems} onClick={() => clickNumber(0)} />
                <GridItem text='Enter' style={enterButtonStyle} onClick={enterGuess} />
            </div> <br /> <br />
            <table style={percentageBarStyle} border='1'>
                <tr>
                    <td style={tdCellStyle} className={tableCellBgColor(0)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(1)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(2)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(3)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(4)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(5)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(6)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(7)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(8)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(9)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(10)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(11)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(12)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(13)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(14)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(15)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(16)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(17)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(18)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(19)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(20)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(21)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(22)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(23)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(24)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(25)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(26)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(27)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(28)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(29)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(30)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(31)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(32)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(33)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(34)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(35)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(36)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(37)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(38)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(39)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(40)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(41)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(42)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(43)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(44)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(45)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(46)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(47)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(48)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(49)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(50)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(51)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(52)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(53)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(54)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(55)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(56)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(57)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(58)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(59)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(60)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(61)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(62)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(63)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(64)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(65)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(66)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(67)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(68)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(69)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(70)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(71)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(72)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(73)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(74)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(75)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(76)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(77)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(78)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(79)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(80)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(81)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(82)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(83)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(84)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(85)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(86)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(87)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(88)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(89)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(90)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(91)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(92)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(93)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(94)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(95)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(96)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(97)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(98)}></td>
                    <td style={tdCellStyle} className={tableCellBgColor(99)}></td>
                </tr>
            </table>
        </div>
    )
}

export default GameField
