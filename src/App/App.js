import React, { Component } from 'react';
import './App.scss';
import GroupContainer from './components/GroupContainer';
import StudentContainer from './components/StudentContainer';

class App extends Component {
  render() {
    return (
      <>
        <GroupContainer />
        <StudentContainer />
      </>
    );
  }
}

export default App;
