import React, { Component } from 'react';
import { message } from 'antd';
import Person from './Person';
import { addTrainer, deleteTrainer, getTrainers } from '../../utils/api';
import TrainerInput from './TrainerInput';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  componentDidMount() {
    this.fetchTrainers();
  }

  postTrainer = (name) => {
    return addTrainer(name).then(this.fetchTrainers);
  };

  fetchTrainers = () => {
    getTrainers().then((trainers) =>
      this.setState({
        trainers: trainers.map((trainer) => ({ ...trainer, type: 'trainer' })),
      })
    );
  };

  removeTrainer = (id) => {
    deleteTrainer(id)
      .then(() => {
        message.success('删除成功');
        this.setState((prevState) => ({
          trainers: prevState.trainers.filter((trainer) => trainer.id !== id),
        }));
      })
      .catch(() => message.error('删除失败'));
  };

  render() {
    const { trainers } = this.state;

    return (
      <section className="trainer-section">
        <h2>讲师列表</h2>
        {trainers.map((trainer) => (
          <Person key={trainer.id} person={trainer} removePerson={this.removeTrainer} />
        ))}
        <TrainerInput addTrainer={this.postTrainer} />
      </section>
    );
  }
}

export default TrainerList;
