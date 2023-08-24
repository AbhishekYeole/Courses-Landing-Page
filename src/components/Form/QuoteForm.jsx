import React from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function QuoteForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  // const onReset = () => {
  //   form.resetFields();
  // };

  return (
    <div className="QuoteFormOutBox">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={
          {
            // maxWidth: 400,
          }
        }
      >
        <Form.Item
          name="First Name"
          label=" First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Last Name"
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          name="Mobile"
          label="Mobile"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" maxLength={13} minLength={10} />
        </Form.Item>

        <Form.Item
          name="Discription"
          label="Discription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea maxLength={120} />
        </Form.Item>

        <Form.Item
          name="Massage"
          label="Massage"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <TextArea maxLength={50} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* <Button htmlType="button" onClick={onReset}>
            Reset
          </Button> */}
        </Form.Item>
      </Form>
    </div>
  );
}

export default QuoteForm;
