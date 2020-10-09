import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import{
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}>
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
