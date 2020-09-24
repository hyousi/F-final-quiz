import React from 'react';
import { Popover, Space } from 'antd';

const content = (trainee) => (
  <Space>
    {Object.entries(trainee).map(([key, val]) => (
      <span key={`${key}-${val}`} className="trainee-info">
        {key}: {val}
      </span>
    ))}
  </Space>
);

const Student = ({ trainee }) => {
  const { name, id } = trainee;
  return (
    <Popover content={content(trainee)}>
      <div className="student">{`${id}. ${name}`}</div>
    </Popover>
  );
};

export default Student;
