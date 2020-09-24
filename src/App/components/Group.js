import React, { useState } from 'react';
import Person from './Person';

const Group = ({ name, students, groupId }) => {
  const [teamName, setTeamName] = useState(name);

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleKeyPress = (e) => {
    const request = {
      id: groupId,
      name: teamName,
      students,
    };

    if (e.key === 'Enter') {
      fetch(`http://localhost:8080/api/groups/${groupId}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(request),
      })
        .then((response) => {
          if (!response.ok) {
            setTeamName(name);
          }
          return response.text();
        })
        .then((msg) => alert(msg));
    }
  };

  return (
    <div className="group">
      <input
        value={teamName}
        placeholder="input team name"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onBlur={() => setTeamName(name)}
      />
      <div className="group-students">
        {students
          .sort((a, b) => a.id - b.id)
          .map((student) => (
            <Person key={`${name}-${student.name}`} person={student} />
          ))}
      </div>
    </div>
  );
};

export default Group;
