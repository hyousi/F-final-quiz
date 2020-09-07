import React, { Component } from 'react';
import Group from './Group';

class GroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  getGroups = () => {
    fetch('http://localhost:8080/api/groups')
      .then((response) => response.json())
      .then((data) => data.sort((a, b) => a.id - b.id))
      .then((groups) => this.setState({ groups }));
  };

  handleGrouping = () => {
    this.getGroups();
  };

  render() {
    const { groups } = this.state;

    return (
      <section className="group-container">
        <div className="row">
          <h2>分组列表</h2>
          <button type="button" onClick={this.handleGrouping}>
            分组学员
          </button>
        </div>
        {groups.map((group) => (
          <Group key={group.name} name={group.name} students={group.students} groupId={group.id} />
        ))}
      </section>
    );
  }
}

export default GroupContainer;
