import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} 
  from 'react-router-dom' 

// Pages
import MainPage from './pages'
import LogicGames from "./pages/logic-games"
import WordGames from './pages/word-games'
import FootballQuizes from './pages/football-quizes'
import SchoolQuizes from './pages/school-quizes'
import GeographyQuizes from './pages/geography-quizes'
import MathQuizes from './pages/math-quizes'
import HistoryQuizes from './pages/history-quizes'
import PhysicsQuizes from './pages/physics-quizes'
import ChemistryQuizes from './pages/chemistry-quizes'

import Quiz from './components/Quiz'
import GeoQuizes from './quiz_questions/geo_quizes.json'

import WordGame from './components/WordGame'
import EnglishWordGames from './word_games/english_word_games.json'

// logic Games
import MemoriseNumbersGame from './pages/memorise-numbers-game'
import FindHiddenNumber from './pages/find-hidden-number'
import RememberLetters from './pages/remember-letters'
import FindThePercentage from './pages/find-the-percentage'
import TapDifferentButton from './pages/tap-different_button'
import LightToDark from './pages/light-to-dark'

const App = () => {

  // All the pages of the website in one place
  return <Router>
            <Switch>
              {/*  This route takes you to the main page  */}
              <Route exact path='/' component={MainPage} />
              {/*   This one takes you to the page with lOGIC GAMES  */}
              <Route exact path='/logic_games' component={LogicGames} />
              {/*   This one takes you to the page with WORD GAMES   */}
              <Route exact path='/word_games' component={WordGames} />
              {/*   This one takes you to the page with FOOTBALL QUIZES  */}
              <Route exact path='/football-quizes' component={FootballQuizes} />
              {/*   This one takes you to the page with SCHOOL QUIZES*/}
              <Route exact path='/school-quizes' component={SchoolQuizes} />
              {/*   Take you to school quizes of different categories */}
              {/* !!!!!!!!!!!   TO BE CREATED   !!!!!!!!!!!!!!!!*/}
              <Route exact path='/school-quizes/geography-quizes' component={GeographyQuizes} />
              <Route exact path='/school-quizes/math-quizes' component={MathQuizes} />
              <Route exact path='/school-quizes/chemistry-quizes' component={ChemistryQuizes} />
              <Route exact path='/school-quizes/history-quizes' component={HistoryQuizes} />
              <Route exact path='/school-quizes/physics-quizes' component={PhysicsQuizes} />
              {/* ////////////////////////////////////////////////////////////////*/}
              {/* ////////////////////////////////////////////////////////////////*/}
              {/*-------------------     Geography Quizes  ----------------------*/ }
              <Route exact path='/school-quizes/geography-quizes/europe' 
              render={() => <Quiz title='Kuiz - Kontinenti i Europes' questions={GeoQuizes.europeContinent}/>} />
              {/* ///////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////
                  ----------------------  Word Games  --------------------------
              */}
              <Route exact path='/word_games/english1'
              render={() => <WordGame words={EnglishWordGames.word_game1}/>} />
              {/* //////////////////////////////////////////////////////////////
                  //////////////////////////////////////////////////////////////
                  --------------------  Logic Games  ---------------------------
              */}
              <Route exact path='/logic_games/memorise_numbers_game' component={MemoriseNumbersGame} />
              <Route exact path='/logic_games/find_hidden_number' component={FindHiddenNumber} />
              <Route exact path='/logic_games/remember_letters' component={RememberLetters} />
              <Route exact path='/logic_games/find_percentage' component={FindThePercentage} />
              <Route exact path='/logic_games/tap_different' component={TapDifferentButton} />
              <Route exact path='/logic_games/light_to_dark' component={LightToDark} />
            </Switch>
          </Router>

}

export default App;
