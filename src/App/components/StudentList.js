import React, { Component } from 'react';
import Student from './Student';
import AddStudent from './AddStudent';

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

  addStudent = (request) => {
    fetch('http://localhost:8080/api/students', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: request,
    })
      .then(() => this.getStudents())
      .catch(() => {
        // TODO: error handling!
      });
  };

  render() {
    const { students } = this.state;
    return (
      <section className="student-container">
        <h2>学院列表</h2>
        {students.map((student) => (
          <Student key={student.id} id={student.id} name={student.name} />
        ))}
        <AddStudent addStudent={this.addStudent} />
      </section>
    );
  }
}

export default StudentList;
