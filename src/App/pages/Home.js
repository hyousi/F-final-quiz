import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import StudentList from '../components/StudentList';
import TrainerList from '../components/TrainerList';

class Home extends Component {
  render() {
    return (
      <>
        <GroupList />
        <TrainerList />
        <StudentList />
      </>
    );
  }
}

export default Home;
