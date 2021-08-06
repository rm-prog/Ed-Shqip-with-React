import React from "react"

import { useState } from "react";
import Header from "../components/Header";
import IntroCard from "../components/IntroCard";

import styles from '../styles/index.module.css'

const MainPage = () => {

    const reloadFunc = () => window.location.reload()

    // Links for buttons
    const goToLogicGames = () => window.open('/logic_games', '_self')
    const goToWordGames = () => window.open('/word_games', '_self')
    const goToFootballQuizes = () => window.open('/football-quizes', '_self')
    const goToSchoolQuizes = () => window.open('/school-quizes', '_self')


    // This array contains info thats going to be used to create buttons
    /*
    {
        id: the key of the button
        desc: text thats going to display over the button
        text: button text
        link: function thats takes you to the new page
        cssClass: styling of button
    }

    */
  const [buttonsText, setButtonsText] = useState([
    { 
        id: 1,
        desc: 'Provoni lojerat e trurit', 
        text: 'Lojerat e trurit',
        linkFunction: () => goToLogicGames(),
        style: ''
    },
    { 
        id: 2,
        desc: 'Provoni lojerat e fjaleve', 
        text: 'Lojerat e fjaleve',
        linkFunction: () => goToWordGames(),
        cssClass: 'blueButton'
    },
    { 
        id: 3,
        desc: 'Provoni njohurite tuaja nga futbolli', 
        text: 'Kuize futbolli',
        linkFunction: () => goToFootballQuizes(),
        cssClass: 'yellowButton'
    },
    { 
        id: 4,
        desc: 'Provoni kuize ne lende te ndryshme shkollore', 
        text: 'Kuize shkollore',
        linkFunction: () => goToSchoolQuizes(),
        cssClass: 'purpleButton'
    }])

    return (
        <div className={styles.pageBody}>
            {/* Header Card of Webpage with name of website */}
            <Header text='Ed-Shqip'/>
            {/* Center all other contents of website */}
            <center>
                {/* This card describes the website and helps the user navigate around */}
                <br /> <br />
                { /*   IntroCard containes buttons that sent users to other Routes     */}
                <IntroCard title='Pershkrimi' descTitle='Pershendetje! Filloni te luani lojerat me poshte.'
                    buttonsText={buttonsText}/>
            </center>
        </div>
    )
}

export default MainPage
