import React, { useEffect } from "react";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";

const DrawerUpdateProduct = (props) => {
  const [form] = Form.useForm();
  let product = props.infoProduct;

  useEffect(() => {
    if (product) {
      onFill();
      console.log("pro: " + JSON.stringify(product));
    }
  }, [props.infoProduct, ]);

  const updateProduct = () => {
    props.closeDrawer();
    let value = form.getFieldValue();
    console.log('value' + JSON.stringify(value.id));
    let id = value.id;
    props.handleUpdate(id, value);
  }

  const onFill = () => {
    form.setFieldsValue({
      id: product.id,
      iddm: product.iddm,
      TenSanPham: product.TenSanPham,
      CachDongGoi: product.CachDongGoi,
      CongDung: product.CongDung,
      DangBaoChe: product.DangBaoChe,
      HanDung: product.HanDung,
      KeToa: product.KeToa,
      NhaSanXuat: product.NhaSanXuat,
      NoiSanXuat: product.NoiSanXuat,
      ThanhPhanChinh: product.ThanhPhanChinh,
      ThuongHieu: product.ThuongHieu,
      img: product.img,
      price: product.price,
    });
  };
  return (
    <>
      <Drawer
        title="Update product"
        width={720}
        onClose={props.closeDrawer}
        open={props.openDrawer}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={props.closeDrawer}>Cancel</Button>
            <Button onClick={updateProduct} type="primary">
              Submit
            </Button>
          </Space>
        }
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
                    message: "Nhập id sản phẩm",
                  },
                ]}
              >
                <Input placeholder="Nhập id sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="iddm"
                label="ID Danh mục"
                rules={[
                  {
                    required: true,
                    message: "Nhập id danh mục",
                  },
                ]}
              >
                <Input placeholder="Nhập id danh mục" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="TenSanPham"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                    message: "Nhập tên sản phẩm",
                  },
                ]}
              >
                <Input placeholder="Nhập tên sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="CachDongGoi"
                label="Cách đóng gói"
                rules={[
                  {
                    required: true,
                    message: "Nhập cách đóng gói",
                  },
                ]}
              >
                <Input placeholder="Nhập cách đóng gói" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="CongDung"
                label="Công dụng"
                rules={[
                  {
                    required: true,
                    message: "Nhập công dụng",
                  },
                ]}
              >
                <Input placeholder="Nhập công dụng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="DangBaoChe"
                label="Dạng bào chế"
                rules={[
                  {
                    required: true,
                    message: "Nhập dạng bào chế",
                  },
                ]}
              >
                <Input placeholder="Nhập dạng bào chế" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="HanDung"
                label="Hạn dùng"
                rules={[
                  {
                    required: true,
                    message: "Nhập hạn dùng",
                  },
                ]}
              >
                <Input placeholder="Nhập hạn dùng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ThuongHieu"
                label="Thương hiệu"
                rules={[
                  {
                    required: true,
                    message: "Nhập thương hiệu",
                  },
                ]}
              >
                <Input placeholder="Nhập thương hiệu" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="NhaSanXuat"
                label="Nhà sản xuất"
                rules={[
                  {
                    required: true,
                    message: "Nhập nhà sản xuất",
                  },
                ]}
              >
                <Input placeholder="Nhập nhà sản xuất" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="NoiSanXuat"
                label="Nơi sản xuất"
                rules={[
                  {
                    required: true,
                    message: "Nhập nơi sản xuất",
                  },
                ]}
              >
                <Input placeholder="Nhập nơi sản xuất" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="img"
                label="Hình ảnh"
                rules={[
                  {
                    required: true,
                    message: "Nhập hình ảnh",
                  },
                ]}
              >
                <Input placeholder="Nhập hình ảnh" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Giá"
                rules={[
                  {
                    required: true,
                    message: "Nhập giá",
                  },
                ]}
              >
                <Input placeholder="Nhập giá" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="KeToa"
                label="Kê toa"
                rules={[
                  {
                    required: true,
                    message: "Nhập kê toa",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Nhập kê toa" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="ThanhPhanChinh"
                label="Thành phần chính"
                rules={[
                  {
                    required: true,
                    message: "Nhập thành phần chính",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Nhập thành phần chính" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerUpdateProduct;
