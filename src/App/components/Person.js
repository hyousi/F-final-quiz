import React, { useState } from 'react';
import { Button, Modal, Popover, Space } from 'antd';

const content = (person) => (
  <Space>
    {Object.entries(person).map(([key, val]) => (
      <span key={`${key}-${val}`} className="person-info">
        {key}: {val}
      </span>
    ))}
  </Space>
);

const Person = ({ person, removeTrainee }) => {
  const { name, id } = person;
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
    <Popover content={content(person)}>
      <Button className="person" onClick={showModal}>{`${id}. ${name}`}</Button>
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

export default Person;
