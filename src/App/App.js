import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, TraineeForm } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trainee/add" component={TraineeForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
