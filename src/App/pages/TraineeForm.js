import React from 'react';
import { Space, Button, Form, Input, message } from 'antd';
import './TraineeForm.scss';
import { addTrainee } from '../../utils/api';
// TODO feedback: 一个组件所有的东西，可以再套一层folder，把他们框起来。

function TraineeForm(props) {
  const [form] = Form.useForm();

  const goBackHome = () => {
    props.history.push('/');
  };

  const handleSubmit = (values) => {
    addTrainee(values)
      .then(() => {
        message.success('添加成功!');
        goBackHome();
      })
      .catch(() => {
        message.error('添加失败');
        form.resetFields();
      });
  };

  return (
    <div className="trainee-form">
      <h1>添加学院</h1>
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: '此项为必填项' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { type: 'email', message: '邮箱格式错误' },
            { required: true, message: '此项为必填项' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="office"
          label="办公室"
          rules={[{ required: true, message: '此项为必填项' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="zoomId"
          label="Zoom ID"
          rules={[{ required: true, message: '此项为必填项' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="github"
          label="Github账号"
          rules={[{ required: true, message: '此项为必填项' }]}
        >
          <Input />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button onClick={goBackHome}>取消</Button>
        </Space>
      </Form>
    </div>
  );
}

export default TraineeForm;
