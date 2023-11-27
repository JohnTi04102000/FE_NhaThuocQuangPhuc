import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Input, DatePicker, Select } from "antd";
import moment from "moment";
import { getProvinces } from "../../service/Location";

const Order = (props) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [ward, setWards] = useState(null);

  const handleSelectProvince = (value) => {
    console.log(`selected ${value}`);
    let getDistrict = provinces.filter((item) => {
    return item.code === value;
    })
    setDistricts(getDistrict[0].districts);
    //console.log('districts', getDistrict[0].districts);
  };

  const handleSelectDistrict = (value) => {

    let getWard = districts.filter((item) =>{
      return item.code === value;
    })
    setWards(getWard[0].wards);
    console.log("ward: ", getWard[0].wards);
  };

  const handleSelectWard = (value) => {
    console.log("ward: ", value);
  }

  const getAllProvinces = async () => {
    try {
      let result = await getProvinces();
      console.log(result);
      setProvinces(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProvinces();
  }, []);
  return (
    <>
      <Modal
        title="Thông tin đơn hàng"
        open={props.showModal}
        onCancel={props.closeModal}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Button type="dashed" danger>
          Thông tin khách hàng
        </Button>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
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
            <Col span={12}>
              <Form.Item
                name="sdt"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Nhập số điện thoại",
                  },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                    message: "Nhập địa chỉ",
                  },
                ]}
              >
                <Select
                  defaultValue="Chọn tỉnh, thành phố"
                  style={{
                    width: 240,
                  }}
                  onChange={handleSelectProvince}
                  allowClear
                  options={provinces.map((item) => ({
                    value: item.code,
                    label: item.name
                  }))}
                />
                <br></br>
                <Select
                  defaultValue="Chọn quận, huyện"
                  style={{
                    width: 240,
                  }}
                  onChange={handleSelectDistrict}
                  allowClear                  
                  options={districts ? districts.map((item) => ({
                    value: item.code,
                    label: item.name
                  })) : null}
                />
                <Select
                  defaultValue="Chọn phường, thị xã"
                  style={{
                    width: 240,
                  }}
                  onChange={handleSelectWard}
                  allowClear                  
                  options={ward ? ward.map((item) => ({
                    value: item.code,
                    label: item.name
                  })) : null}
                />     
                <Input placeholder="Nhập số nhà cụ thể" />         
              </Form.Item>              
            </Col>
          </Row>
        </Form>
        <Button type="dashed" danger>
          Thông tin đơn hàng
        </Button>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="total"
                label="Tổng tiền"
                rules={[
                  {
                    required: true,
                    message: "Nhập tổng tiền",
                  },
                ]}
              >
                <Input placeholder="Nhập tổng tiền" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="date"
                label="Ngày đặt hàng"
                rules={[
                  {
                    required: true,
                    message: "Nhập ngày đặt",
                  },
                ]}
              >
                <DatePicker defaultValue={moment()} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Order;
