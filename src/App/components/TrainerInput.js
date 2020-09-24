import React, { useState } from 'react';

const TrainerInput = ({ addTrainer }) => {
  const [name, setName] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addTrainer(name).then(setName(''));
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
        e.target.placeholder = '+ 添加讲师';
      }}
      onKeyUp={handleEnter}
      placeholder="+ 添加讲师"
    />
  );
};

export default TrainerInput;
