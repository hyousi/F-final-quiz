import React from 'react';

const Student = ({ id, name }) => {
  return <div className="student">{`${id}. ${name}`}</div>;
};

export default Student;
