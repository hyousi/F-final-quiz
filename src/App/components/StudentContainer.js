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
    fetch('http://localhost:8080/api/students')
      .then((response) => response.json())
      .then((data) => this.setState({ students: data }));
  }

  render() {
    const { students } = this.state;
    return (
      <section>
        <h2>学院列表</h2>
        {students.map((student) => (
          <Student key={student.id} id={student.id} name={student.name} />
        ))}
        <AddStudent />
      </section>
    );
  }
}

export default StudentContainer;
