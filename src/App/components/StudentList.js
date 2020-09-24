import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Student from './Student';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    // TODO: use a HTTP request lib
    fetch('http://localhost:8080/api/students')
      .then((response) => response.json())
      .then((data) => data.sort((a, b) => a.id - b.id))
      .then((students) => this.setState({ students }));
  };

  goToTraineeFormPage = () => {
    this.props.history.push('/trainee/add');
  };

  render() {
    const { students } = this.state;
    return (
      <section className="student-container">
        <h2>学院列表</h2>
        {students.map((student) => (
          <Student key={student.id} id={student.id} name={student.name} />
        ))}
        <Button type="primary" onClick={this.goToTraineeFormPage}>
          + 添加学员
        </Button>
      </section>
    );
  }
}

export default withRouter(StudentList);
