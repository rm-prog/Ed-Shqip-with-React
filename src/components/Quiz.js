import { useState, useRef } from 'react';

import styles from '../styles/quiz.module.css'

import BackButton from './buttonComponents/BackButton';

const Quiz = ( { title, questions } ) => {

    const backHistory = () => {
        window.history.back();
    }

    const [quizQuestions, setQuizQuestions] = useState(questions) 

    // Alternative Buttons should be disabled after one altBtn is clicked
    // Then enabled again after clicked on Next button
    const [disableAltBtn, setDisableAltBtn] = useState(false)

    const alt1 = useRef(null)
    const alt2 = useRef(null)
    const alt3 = useRef(null)

    // index of current question of the quiz
    let [quesNumber, changeIndex] = useState(0)
    let [numOfRightAnswers, setNumOfRightAnswers] = useState(0)
    let [numOfWrongAnswers, setNumOfWrongAnswers] = useState(0)

    // AltBtn colors
    // this colors will changed when altButtons are clicked
    // based on the value of the altButtons
    let [alt1Color, setAlt1Color] = useState(styles.cyanBtn)
    let [alt2Color, setAlt2Color] = useState(styles.cyanBtn)
    let [alt3Color, setAlt3Color] = useState(styles.cyanBtn)

    // Should the correct answer of the question be displayed
    let [displayAnswer, setDisplayAnswer] = useState(false)

    // Should Next Button be disabled 
    let [disableNextBtn, setDisableNextBtn] = useState(true)

    // Should the quiz container or the answers container be displayed
    // If false then answers container should be displayed
    let [displayQuizContainer, setDisplayQuizContainer] = useState(true)

    const altClick = (correct) => {
        // Display the answer of the question
        setDisplayAnswer(true)
        // Make sure the alternative buttos can be clicked only once
        setDisableAltBtn(true)
        // Check if the user answered correctly
        if (!correct) { 
            setNumOfWrongAnswers(numOfWrongAnswers++)
            setNumOfWrongAnswers(numOfWrongAnswers)
            setNumOfRightAnswers(numOfRightAnswers)
        }
        else {
            setNumOfRightAnswers(numOfRightAnswers++)
            setNumOfRightAnswers(numOfRightAnswers)
            setNumOfWrongAnswers(numOfWrongAnswers)
        }
        // Allow the user to go to the next question
        setDisableNextBtn(false)
    }

    const nextClick = () => {
        // Check if there are questions left
        if (quizQuestions[quesNumber+1] === undefined) {
            setDisplayQuizContainer(false)
        } else {
            // If so go to next question
            // and change the buttons as they were before
            changeIndex(quesNumber++)
            changeIndex(quesNumber)
            setAlt1Color(styles.cyanBtn)
            setAlt2Color(styles.cyanBtn)
            setAlt3Color(styles.cyanBtn)
            setDisableAltBtn(false)
            setDisplayAnswer(false)
        }
        // Make sure user cant go to next question without clicking an alternative btn
        setDisableNextBtn(true)
    }

    return (
        <div className={`${styles.pageBody} ${styles.blueYellowBg}`}>
            <center>
                <h1> {title} </h1>
                {/* This div contains the current question, alternatives, answers and Next Btn */}
                <div className={`${styles.quiz_container} ${displayQuizContainer ? styles.displayGrid : styles.displayNone}`}>
                    <div className={styles.question}>{quizQuestions[quesNumber].question}</div>
                    {/* Inside here sit the current questions alternatives */}
                    {/* The onClick functions of this alternative Buttons do this:  */}
                    {/* Check if this is the correct alternative or not and changes the color of the button */}
                    {/* Calls another function */}
                    <div id={styles.alternatives}>
                        <button value={quizQuestions[quesNumber].alternatives[0].correct} 
                        onClick={(correct) => {
                            correct = alt1.current.value === '0' ? false : true
                            if (!correct) { 
                                console.log('Wrong')
                                setAlt1Color(styles.redBtn)
                            } 
                            else {
                                console.log('Correcttt')
                                setAlt1Color(styles.greenBtn)
                            }
                            altClick(correct)
                        }} 
                        // alt1Color will change according to the answer of the user being correct or not
                        className={`${styles.btn} ${alt1Color}`} ref={alt1}
                        // Alt Btn will be disabled when user clicks one alt button
                        // And enabled after next Btn is clicked
                        disabled={disableAltBtn}>
                        {quizQuestions[quesNumber].alternatives[0].a} </button>
                        <button value={quizQuestions[quesNumber].alternatives[1].correct} 
                        onClick={(correct) => {
                            correct = alt2.current.value === '0' ? false : true
                            if (!correct) { 
                                console.log('Wrong')
                                setAlt2Color(styles.redBtn)
                            } 
                            else {
                                console.log('Correcttt')
                                setAlt2Color(styles.greenBtn)
                            }
                            altClick(correct)
                        }}  
                        // alt2Color will change according to the answer of the user being correct or not
                        className={`${styles.btn} ${alt2Color}`} ref={alt2}
                        // Alt Btn will be disabled when user clicks one alt button
                        // And enabled after next Btn is clicked
                        disabled={disableAltBtn}>
                        {quizQuestions[quesNumber].alternatives[1].b} </button>
                        <button value={quizQuestions[quesNumber].alternatives[2].correct} 
                        onClick={(correct) => {
                            correct = alt3.current.value === '0' ? false : true
                            if (!correct) { 
                                console.log('Wrong')
                                setAlt3Color(styles.redBtn)
                            } 
                            else {
                                console.log('Correcttt')
                                setAlt3Color(styles.greenBtn)
                            }
                            altClick(correct)
                        }}  
                        // alt3Color will change according to the answer of the user being correct or not
                        className={`${styles.btn} ${alt3Color}`} ref={alt3}
                        // Alt Btn will be disabled when user clicks one alt button
                        // And enabled after next Btn is clicked
                        disabled={disableAltBtn}>
                        {quizQuestions[quesNumber].alternatives[2].c} </button>
                    </div> 
                    <br />
                    {/* The answer of the question will be displayed when the user clicks an alt button */}
                    {/* And hidden after the next btn is clicked  */}
                    <span className={displayAnswer ? styles.displayBlock : styles.displayNone}> Pergjigja e sakte: {questions[quesNumber].correct} </span>
                    {/* The Next Btn will disabled until user cliks an alt button */}
                    <button className={`${styles.next_btn} ${styles.btn}`} onClick={() => nextClick()} id='next1' disabled={disableNextBtn}> Next </button>
                </div>

                {/* This div containing all the correct answers will be displayed after all questions are finished */}
                <div className={`${styles.quiz_container} ${!displayQuizContainer ? styles.displayGrid : styles.displayNone}`}>
                    <div className={styles.question}> Rezultatet </div>
                    <br />
                    <div className={displayAnswer ? styles.displayBlock : styles.displayNone}> Pergjigje te sakta: {numOfRightAnswers} <br />
                    Pergjigje te gabuara: {numOfWrongAnswers} <br />
                    {/* Print all questions and answers */}
                    {questions.map((question) => (
                        <span> 
                            <br /> - {question.question} <strong> {question.correct} </strong>
                        </span>
                    ))} </div>
                </div>

                <BackButton onClick={backHistory}/>
            </center>
        </div>
    )
}

export default Quiz
