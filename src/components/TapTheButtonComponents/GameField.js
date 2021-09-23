import { useState } from 'react'

import styles from '../../styles/logicGames.module.css'

import StartButton from '../StartButton'
import AltButton from './AltButton'

const GameField = () => {

    // State Variables

    let [timeDisplay, setTimeDisplay] = useState('00:01')

    let [instructionColor, setInstructionColor] = useState('black')
    let [instructionText, setInstructionText] = useState('')

    // Functions

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
            <StartButton /> <br />
            <div style={timeDisplayStyle}>
                {timeDisplay}
            </div> <br /> <br />
            <h2 style={{ color: instructionColor }}>
                {instructionText}
            </h2> <br />
            <div style={buttonsContainerStyle}>
                <AltButton />
                <AltButton />
                <AltButton />
            </div> <br />
        </div>
    )
}

export default GameField
