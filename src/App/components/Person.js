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

const Person = ({ person, removePerson }) => {
  const { name, id } = person;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    removePerson(id);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const modalTitle = person.type === 'trainee' ? '删除学员' : '删除讲师';

  return (
    <Popover content={content(person)}>
      <Button className="person" onClick={showModal}>{`${id}. ${name}`}</Button>
      <Modal
        title={modalTitle}
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
