import React, { useState, useEffect } from "react";
import { getAllOrderComplete } from "../../../service/OrderService";
import { Table, Tag, Space, Popconfirm } from "antd";

function List_Order() {
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await getAllOrderComplete();
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
      key: "trangThai",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="btn-delete">
            <i class="fa-solid fa-circle-check"></i>
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>DANH SÁCH ĐƠN HÀNG ĐÃ GIAO THÀNH CÔNG</h1>
      <Table dataSource={listOrder} columns={columns} />;
    </>
  );
}

export default List_Order;
