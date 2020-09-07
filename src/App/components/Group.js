import React from 'react';
import Student from './Student';

const Group = ({ name, students }) => {
  return (
    <div>
      <h3>{name}</h3>
      {students.map((student) => (
        <Student key={`${name}-${student.name}`} id={student.id} name={student.name} />
      ))}
    </div>
  );
};

export default Group;
