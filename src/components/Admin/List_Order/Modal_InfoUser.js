import React, { useEffect } from "react";
import { Button, Modal, Form, Row, Col, Input, Space, Popconfirm } from "antd";
import { updateOrderAccept } from "../../../service/OrderService";
import { toast } from "react-toastify";

const Modal_InfoUser = (props) => {
  const [form] = Form.useForm();
  let info_User = props.info_User;
  let info_Order = props.info_Order;

  useEffect(() => {
    if (info_User.length > 0) {
      onFill();
    }
  }, [info_User]);

  const onFill = () => {
    form.setFieldsValue({
      id: info_User[0].id,
      name: info_User[0].tenKhachHang,
      sdt: info_User[0].soDienThoai,
      email: info_User[0].email,
      diachi: info_User[0].diaChi,
    });
  };

  const handleAcceptOrder = async (id_User, id_Order) => {
    let result = await updateOrderAccept(id_User, id_Order);
    if (result) { 
      props.closeInfo();
      toast.success("Cập nhật trạng thái đơn hàng thành công!");
    }
  };

  return (
    <>
      <Modal
        title="Thông tin người mua"
        open={props.showInfo}
        okButtonProps={{ style: { display: "none" } }}
        //onOk={props.closeInfo}
        onCancel={props.closeInfo}
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="id"
                label="ID"
                rules={[
                  {
                    required: true,
                    message: "Nhập id khách hàng",
                  },
                ]}
              >
                <Input placeholder="Nhập id khách hàng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên khách hàng"
                rules={[
                  {
                    required: true,
                    message: "Nhập tên khách hàng",
                  },
                ]}
              >
                <Input placeholder="Nhập tên khách hàng" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="sdt"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Nhập số điện thoại khách hàng",
                  },
                ]}
              >
                <Input placeholder="Nhập số điện thoại khách hàng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Nhập email khách hàng",
                  },
                ]}
              >
                <Input placeholder="Nhập email khách hàng" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="diachi"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                    message: "Nhập địa chỉ khách hàng",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập địa chỉ khách hàng"
                />
              </Form.Item>
            </Col>
          </Row>
          <Space size="middle">
            <Popconfirm
              title="Duyệt đơn hàng"
              description="Xác nhận duyệt đơn hàng này"
                onConfirm={() => {
                  handleAcceptOrder(info_User[0].id, info_Order);
                }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>
                Duyệt đơn hàng
              </Button>
            </Popconfirm>
          </Space>
        </Form>
      </Modal>
    </>
  );
};

export default Modal_InfoUser;
