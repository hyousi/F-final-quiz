import React, { useState } from 'react';
import { Button, Modal, Popover, Space } from 'antd';

const content = (trainee) => (
  <Space>
    {Object.entries(trainee).map(([key, val]) => (
      <span key={`${key}-${val}`} className="trainee-info">
        {key}: {val}
      </span>
    ))}
  </Space>
);

const Student = ({ trainee, removeTrainee }) => {
  const { name, id } = trainee;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    removeTrainee(id);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Popover content={content(trainee)}>
      <Button className="student" onClick={showModal}>{`${id}. ${name}`}</Button>
      <Modal
        title="删除学员"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <p>是否要删除 {`${id}.${name}`}</p>
      </Modal>
    </Popover>
  );
};

export default Student;
