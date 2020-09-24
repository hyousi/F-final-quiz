import React, { Component } from 'react';
import Person from './Person';
import { getTrainers } from '../../utils/api';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  componentDidMount() {
    getTrainers().then((trainers) => this.setState({ trainers }));
  }

  addTrainer = () => {
    // TODO: add trainer
  };

  render() {
    const { trainers } = this.state;

    return (
      <section className="trainer-section">
        <h2>讲师列表</h2>
        {trainers.map((trainer) => (
          <Person key={trainer.id} person={trainer} />
        ))}
      </section>
    );
  }
}

export default TrainerList;
