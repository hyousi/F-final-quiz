import React, { Component } from 'react';
import Student from './Student';
import AddStudent from './AddStudent';

class StudentContainer extends Component {
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
      .then((data) => this.setState({ students: data }));
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
      <section>
        <h2>学院列表</h2>
        {students.map((student) => (
          <Student key={student.id} id={student.id} name={student.name} />
        ))}
        <AddStudent addStudent={this.addStudent} />
      </section>
    );
  }
}

export default StudentContainer;
