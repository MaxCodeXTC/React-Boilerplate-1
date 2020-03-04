import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

const App = () => {
  return( 
    <Router>
      <Switch>
        <Route path="/" exact>Testing home Route</Route>
        <Route path="/different" exact>Testing different Route</Route>
      <Redirect to="/" />
    </Switch>
    </Router>
  )
}

export default App;
