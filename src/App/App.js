import React, { Component } from 'react';
import './App.scss';
// FIXME: ant design style sheet
import '../../node_modules/antd/dist/antd.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, TraineeForm } from './pages';

// TODO feedback: App算是一个特殊的component.
// 所以，其实这里你可以把App放到/components目录，而不是把components目录放到/App
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
