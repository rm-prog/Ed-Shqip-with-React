import { useState } from "react";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";

function App() {

  const reloadFunc = () => window.location.reload()

  const [buttonsText, setButtonsText] = useState([
    { 
        id: 1,
        desc: 'Provoni lojerat e trurit', 
        text: 'Lojerat e trurit',
        linkFunction: () => reloadFunc(),
        cssClass: 'myButton'
    },
    { 
        id: 2,
        desc: 'Provoni lojerat e fjaleve', 
        text: 'Lojerat e fjaleve',
        linkFunction: () => reloadFunc(),
        cssClass: 'myButton blueButton'
    },
    { 
        id: 3,
        desc: 'Provoni njohurite tuaja nga futbolli', 
        text: 'Kuize futbolli',
        linkFunction: () => reloadFunc(),
        cssClass: 'myButton yellowButton'
    },
    { 
        id: 4,
        desc: 'Provoni kuize ne lende te ndryshme shkollore', 
        text: 'Kuize shkollore',
        linkFunction: () => reloadFunc(),
        cssClass: 'myButton purpleButton'
    }])

  return (
    <div>
      {/* Header Card of Webpage with name of website */}
      <Header text='Ed-Shqip'/>
      {/* Center all other contents of website */}
      <center>
        {/* This card describes the website and helps the user navigate around */}
        <br /> <br />
        {
          buttonsText.length > 0 ? <IntroCard title='Pershkrimi' descTitle='Pershendetje! Filloni te luani lojerat me poshte.'
          buttonsText={buttonsText}/> : ''
        } 
      </center>
    </div>
  );
}

export default App;
