import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import{
  BrowserRouter as Nope,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Quizzes from './components/Quizzes';
import Quizzes2 from './components/Quizzes2';
import Quizzes3 from './components/Quizzes3';

class App extends React.Component {
  render(){
  return (
    <Nope basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/imagequiz/' render={props => <Home {...props} />}>
          </Route>
        <Route path='/login'> 
        <Login />
        </Route>
        <Route path ='/quizzes'>
          <Quizzes />
        </Route>
        <Route path ='/quizzes2'>
          <Quizzes2 />
        </Route>
        <Route path ='/quizzes3'>
          <Quizzes3 />
        </Route>
      </Switch>
    </Nope>
  );
  }
}
export default App;
