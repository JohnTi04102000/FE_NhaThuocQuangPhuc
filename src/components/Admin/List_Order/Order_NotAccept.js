import React, { useState, useEffect } from "react";
import { getAllOrderNotAccept } from "../../../service/OrderService";
import { Table, Tag, Space, Popconfirm } from "antd";

function List_Order() {
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await getAllOrderNotAccept();
      if (data) {
        data.map((item) => {
          return (item.ngayMuaHang = getFormattedDate(
            new Date(item.ngayMuaHang)
          ));
        });
        setListOrder(data);
      }
    };
    getData();
  }, []);

  const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${month} - ${day} - ${year}`;
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ngày mua",
      dataIndex: "ngayMuaHang",
      key: "ngayMuaHang",
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongTien",
      key: "tongTien",
    },
    {
      title: "Khách hàng",
      dataIndex: "idKH",
      key: "idKH",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "trangThai",
      key: "trangThai"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
              title="Duyệt đơn hàng"
              description="Xác nhận duyệt đơn hàng này"
            //   onConfirm={() => {
            //     handleDeleteProduct(record.id);
            //   }}
              okText="Yes"
              cancelText="No"
            >
              <button >
              <i class="fa-solid fa-boxes-packing"></i>
              </button>
            </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
        <h1>DANH SÁCH ĐƠN HÀNG ĐANG CHỜ DUYỆT</h1>
      <Table dataSource={listOrder} columns={columns} />;
    </>
  );
}

export default List_Order;
