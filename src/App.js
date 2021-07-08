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

  return <Router>
            <Switch>
              <Route exact path='/' component={MainPage}></Route>
              <Route exact path='/logic_games' component={LogicGames}></Route>
            </Switch>
          </Router>

}

export default App;
