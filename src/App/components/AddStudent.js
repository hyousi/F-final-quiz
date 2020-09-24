import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addStudent(JSON.stringify({ name }));
      setName('');
    }
  };

  return (
    <input
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onFocus={(e) => {
        e.target.placeholder = '';
      }}
      onBlur={(e) => {
        e.target.placeholder = '+ 添加学员';
      }}
      onKeyUp={handleEnter}
      className="add-student-button"
      placeholder="+ 添加学员"
    />
  );
};

export default AddStudent;
