import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import StudentList from '../components/StudentList';

class Home extends Component {
  render() {
    return (
      <>
        <GroupList />
        <StudentList />
      </>
    );
  }
}

export default Home;
