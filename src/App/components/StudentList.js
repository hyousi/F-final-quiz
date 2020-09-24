import React, { Component } from 'react';
import { Button, message } from 'antd';
import { withRouter } from 'react-router-dom';
import Person from './Person';
import { deleteTrainee, getTrainees } from '../../utils/api';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    getTrainees()
      .then((data) => data.sort((a, b) => a.id - b.id))
      .then((students) => this.setState({ students }));
  }

  goToTraineeFormPage = () => {
    this.props.history.push('/trainee/add');
  };

  removeTrainee = (id) => {
    deleteTrainee(id)
      .then(() => {
        message.success('删除成功');
        this.setState((prevState) => ({
          students: prevState.students.filter((student) => student.id !== id),
        }));
      })
      .catch(() => message.error('删除失败'));
  };

  render() {
    const { students } = this.state;
    return (
      <section className="student-container">
        <h2>学员列表</h2>
        {students.map((student) => (
          <Person key={student.id} person={student} removeTrainee={this.removeTrainee} />
        ))}
        <Button type="primary" onClick={this.goToTraineeFormPage}>
          + 添加学员
        </Button>
      </section>
    );
  }
}

export default withRouter(StudentList);
