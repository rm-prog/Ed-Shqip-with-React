import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} 
  from 'react-router-dom' 

// Pages
import MainPage from './pages';
import LogicGames from "./pages/logic-games";
import WordGames from './pages/word-games';
import FootballQuizes from './pages/football-quizes'
import SchoolQuizes from './pages/school-quizes'
import GeographyQuizes from './pages/geography-quizes'
import MathQuizes from './pages/math-quizes'
import HistoryQuizes from './pages/history-quizes'
import PhysicsQuizes from './pages/physics-quizes'
import ChemistryQuizes from './pages/chemistry-quizes';

import Quiz from './components/Quiz';

import GeoQuizes from './quiz_questions/geo_quizes';
import GeoQuiz from './quiz_questions/geo_quizes.json'

function App() {

  // All the pages of the website in one place
  return <Router>
            <Switch>
              {/*  This route takes you to the main page  */}
              <Route exact path='/' component={MainPage}></Route>
              {/*   This one takes you to the page with lOGIC GAMES  */}
              <Route exact path='/logic_games' component={LogicGames}></Route>
              {/*   This one takes you to the page with WORD GAMES   */}
              <Route exact path='/word_games' component={WordGames}></Route>
              {/*   This one takes you to the page with FOOTBALL QUIZES  */}
              <Route exact path='/football-quizes' component={FootballQuizes}></Route>
              {/*   This one takes you to the page with SCHOOL QUIZES*/}
              <Route exact path='/school-quizes' component={SchoolQuizes}></Route>
              {/*   Take you to school quizes of different categories */}
              {/* !!!!!!!!!!!   TO BE CREATED   !!!!!!!!!!!!!!!!*/}
              <Route exact path='/school-quizes/geography-quizes' component={GeographyQuizes}></Route>
              <Route exact path='/school-quizes/math-quizes' component={MathQuizes}></Route>
              <Route exact path='/school-quizes/chemistry-quizes' component={ChemistryQuizes}></Route>
              <Route exact path='/school-quizes/history-quizes' component={HistoryQuizes}></Route>
              <Route exact path='/school-quizes/physics-quizes' component={PhysicsQuizes}></Route>
              {/* ////////////////////////////////////////////////////////////////*/}
              {/* ////////////////////////////////////////////////////////////////*/}
              {/*-------------------     Geography Quizes  ----------------------*/ }
              <Route exact path='/school-quizes/geography-quizes/europe' 
              render={() => <Quiz title='Kuiz - Kontinenti i Europes' questions={GeoQuiz.europeContinent}/>}></Route>
            </Switch>
          </Router>

}

export default App;
