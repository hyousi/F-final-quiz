import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import StudentList from '../components/StudentList';
import TrainerList from '../components/TrainerList';

class Home extends Component {
  render() {
    return (
      //  TODO feedback, 比起fragment,这里把三个组件放到一个main标签里面更合适一些
      <>
        <GroupList />
        <TrainerList />
        <StudentList />
      </>
    );
  }
}

export default Home;
