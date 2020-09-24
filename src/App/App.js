import React, { Component } from 'react';
import './App.scss';
// FIXME: ant design style sheet
import '../../node_modules/antd/dist/antd.min.css';
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
