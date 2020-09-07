import React, { useState } from 'react';
import Student from './Student';

const Group = ({ name, students }) => {
  const [teamName, setTeamName] = useState(name);

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <div className="group">
      <input value={teamName} onChange={handleChange} placeholder="input team name" />
      <div className="group-students">
        {students.map((student) => (
          <Student key={`${name}-${student.name}`} id={student.id} name={student.name} />
        ))}
      </div>
    </div>
  );
};

export default Group;
