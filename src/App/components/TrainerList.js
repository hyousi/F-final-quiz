import React, { Component } from 'react';
import Person from './Person';
import { addTrainer, getTrainers } from '../../utils/api';
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
    getTrainers().then((trainers) => this.setState({ trainers }));
  };

  render() {
    const { trainers } = this.state;

    return (
      <section className="trainer-section">
        <h2>讲师列表</h2>
        {trainers.map((trainer) => (
          <Person key={trainer.id} person={trainer} />
        ))}
        <TrainerInput addTrainer={this.postTrainer} />
      </section>
    );
  }
}

export default TrainerList;
