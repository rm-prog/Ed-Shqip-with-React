import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect } 
  from 'react-router-dom' 

// Pages
import MainPage from './pages';
import LogicGames from "./pages/logic-games";

function App() {

  // All the pages of the website in one place
  return <Router>
            <Switch>
              {/*  This route takes you to the main page  */}
              <Route exact path='/' component={MainPage}></Route>
              {/*   This one takes you the page that takes you the lOGIC GAMES  */}
              <Route exact path='/logic_games' component={LogicGames}></Route>
            </Switch>
          </Router>

}

export default App;
