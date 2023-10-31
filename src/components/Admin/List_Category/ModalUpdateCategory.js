import React, { useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";

const ModalUpdateCategory = (props) => {
  let category = props.idCategory;
  let name = props.nameCategory;
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(category, name);
    onFill();
  }, [category, name]);

  
  const onFinish = (values) => {
    console.log("Success:", values);
    let id_Category = values.id;
    let name_Category = values.category;
    props.handleUpdate(id_Category, name_Category);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFill = () => {
    form.setFieldsValue({
        id: category,
        category: name,
      });
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.showCategory}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <Form
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ID"
            name="id"
            disabled={true}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Danh mục"
            name="category"
            rules={[
              {
                required: true,
                message: "Nhập danh mục",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalUpdateCategory;
