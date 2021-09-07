import { useState } from 'react'

import StartButton from '../components/StartButton'
import BackButton from '../components/BackButton'
import LogicGamesHeader from '../components/LogicGamesHeader'
import GridItem from '../components/GridItem'

import styles from '../styles/logicGames.module.css'

import numbersOrderArray from '../logic_games_data/memorise_numbers_game.json'

const MemoriseNumbersGame = () => {

    const numbersArray = numbersOrderArray

    let [startButtonText, setStartButtonText] = useState('Filloni Lojen')
    let [disableStartButton, setDisableStartButton] = useState(false)

    // let [displayContainer, setDisplayContainer] = useState(styles.displayNone)

    // Text displaying below startButton, guiding the user, and telling if his answer is okay
    let [answer, setAnswer] = useState('Memorizoni rradhen e numrave dhe pastaj shtypni kutite sipas rradhes')

    let [solvedExercises, setSolvedExercises] = useState(0)
    let [unsolvedExercises, setUnsolverExercises] = useState(0)

    let [exerciseIndex, setExerciseIndex] = useState(0)

    let [numberIndex, setNumberIndex] = useState(1)

    let timeCounter;
    let [numberRevealIndex, setNumberRevealIndex] = useState(0)

    let [gridItemsText, setgridItemsText] = useState(
        [
            '', '', '', '', '', '', '', '', ''
        ]
    )
    let [gridItemsValue, setGridItemsValue] = useState(
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0   
        ]
    ) 

    const startGame = () => {
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
        // Not Finished
        setGridItemsValue(
            [
                0, 0, 0, 0, 0, 0, 0, 0, 0
            ]
        )
        setNumberIndex(1)
        setNumberRevealIndex(0)
        setExerciseIndex(exerciseIndex++)
        setExerciseIndex(exerciseIndex)
        setStartButtonText('Next')
        setDisableStartButton(true)
        setAnswer('Memorizoni rradhen e numrave dhe pastaj shtypni kutite sipas rradhes')
        if (numbersArray[exerciseIndex] !== undefined) {
            timeCounter = setInterval(myTimer, 1000)
        } else {
            setAnswer(`Bravo kaluat te gjitha raundet
            me ${unsolvedExercises} gabime`)
        }
    }

    const myTimer = () => {
        if (numberRevealIndex < 9) {
            gridItemsText[numbersArray[exerciseIndex].countdownOrder[numberRevealIndex]] = numbersArray[exerciseIndex].theNumbers[numbersArray[exerciseIndex].countdownOrder[numberRevealIndex]]
            setgridItemsText(gridItemsText)
            gridItemsValue[numbersArray[exerciseIndex].countdownOrder[numberRevealIndex]] = numbersArray[exerciseIndex].theNumbers[numbersArray[exerciseIndex].countdownOrder[numberRevealIndex]]
            setGridItemsValue(gridItemsValue)
            setNumberRevealIndex(numberRevealIndex++)
            setNumberRevealIndex(numberRevealIndex)
        } else {
            setNumberRevealIndex(0)
            setgridItemsText(
                [
                    '', '', '', '', '', '', '', '', ''
                ]
            )
            clearInterval(timeCounter)
        }
    }

    const numberClick = (value, index) => {
        if (value === numberIndex) {
            gridItemsText[index] = value
            numberIndex++
            setNumberIndex(numberIndex)
            if (numberIndex === 10) {
                setgridItemsText(
                    [
                        '', '', '', '', '', '', '', '', ''
                    ]
                )
                setGridItemsValue(
                    [
                        0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
                )
                solvedExercises++
                setSolvedExercises(solvedExercises)
                setDisableStartButton(false)
                setAnswer('Bravo!! Vazhdoni me nivelin tjeter')
            } else {
                setAnswer('Sakte!! Vazhdoni.')
            }
        } else {
            if (numberRevealIndex !== 0) {
                return 0;
            }
            unsolvedExercises++
            setUnsolverExercises(unsolvedExercises)
            setAnswer('Gabim!!')
        }
    }

    const backHistory = () => {
        window.history.back()
    }

    return (
        <div className={`${styles.pageBody} ${styles.blueGreenBg}`}>
            <LogicGamesHeader title='Shtypni numrat sipas rradhes'/>
            <br /> <br />
            <center>
                <StartButton text={startButtonText} disabled={disableStartButton} onClick={startGame}/>
                <br />
                <div style={ { fontSize: '1.3rem', display: 'block' } }> {answer} </div>
                <br /> <br />
                <div className={styles.calculatorContainer}>
                    <GridItem text={gridItemsText[0]} onClick={() => numberClick(gridItemsValue[0], 0)}/>
                    <GridItem text={gridItemsText[1]} onClick={() => numberClick(gridItemsValue[1], 1)}/>
                    <GridItem text={gridItemsText[2]} onClick={() => numberClick(gridItemsValue[2], 2)}/>
                    <GridItem text={gridItemsText[3]} onClick={() => numberClick(gridItemsValue[3], 3)}/>
                    <GridItem text={gridItemsText[4]} onClick={() => numberClick(gridItemsValue[4], 4)}/>
                    <GridItem text={gridItemsText[5]} onClick={() => numberClick(gridItemsValue[5], 5)}/>
                    <GridItem text={gridItemsText[6]} onClick={() => numberClick(gridItemsValue[6], 6)}/>
                    <GridItem text={gridItemsText[7]} onClick={() => numberClick(gridItemsValue[7], 7)}/>
                    <GridItem text={gridItemsText[8]} onClick={() => numberClick(gridItemsValue[8], 8)}/>             
                </div>
                <br /> <br />
                <BackButton onClick={backHistory}/>
            </center>
        </div>
    )
}

export default MemoriseNumbersGame
