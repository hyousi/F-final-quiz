import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [editable, setEditable] = useState(false);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addStudent(JSON.stringify({ name }));
      setName('');
    }
  };

  const handleClick = () => setEditable(true);

  return editable ? (
    <input
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onKeyPress={handleEnter}
      className="student"
    />
  ) : (
    <button type="button" onClick={handleClick} className="student">
      添加学员
    </button>
  );
};

export default AddStudent;
