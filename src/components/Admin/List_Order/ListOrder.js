import React, { useState, useEffect } from "react";
import { getAllOrders } from "../../../service/OrderService";
import { Table, Tag, Space, Popconfirm } from "antd";

function List_Order() {
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await getAllOrders();
      if (data) {
        data.map((item) => {
          return (item.ngayMuaHang = getFormattedDate(
            new Date(item.ngayMuaHang)
          ));
        });
        let data_revert = data.reverse();
        setListOrder(data_revert);
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
  ];

  return (
    <>
    <h1>DANH SÁCH TẤT CẢ ĐƠN HÀNG</h1>
      <Table dataSource={listOrder} columns={columns} />;
    </>
  );
}

export default List_Order;
