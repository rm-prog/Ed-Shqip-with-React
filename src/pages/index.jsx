import React from "react"

import { useState } from "react";
import Header from "../components/Header";
import IntroCard from "../components/IntroCard";

import styles from '../index.module.css'

const MainPage = () => {

    const reloadFunc = () => window.location.reload()


    // This array contains info thats going to be used to create buttons
    /*
    {
        id: the key of the button
        desc: text thats going to display over the button
        text: button text
        link: function thats going to execute when clicking the button
        cssClass: styling of button
    }

    */
  const [buttonsText, setButtonsText] = useState([
    { 
        id: 1,
        desc: 'Provoni lojerat e trurit', 
        text: 'Lojerat e trurit',
        linkFunction: () => reloadFunc(),
        style: ''
    },
    { 
        id: 2,
        desc: 'Provoni lojerat e fjaleve', 
        text: 'Lojerat e fjaleve',
        linkFunction: () => reloadFunc(),
        cssClass: 'blueButton'
    },
    { 
        id: 3,
        desc: 'Provoni njohurite tuaja nga futbolli', 
        text: 'Kuize futbolli',
        linkFunction: () => reloadFunc(),
        cssClass: 'yellowButton'
    },
    { 
        id: 4,
        desc: 'Provoni kuize ne lende te ndryshme shkollore', 
        text: 'Kuize shkollore',
        linkFunction: () => reloadFunc(),
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
                
                <IntroCard title='Pershkrimi' descTitle='Pershendetje! Filloni te luani lojerat me poshte.'
                    buttonsText={buttonsText}/>
            </center>
        </div>
    )
}

export default MainPage
