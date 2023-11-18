import React, { useState, useEffect } from "react";
import {
  getAllOrderNotAccept,
  getUserById,
} from "../../../service/OrderService";
import { Table, Tag, Space, Popconfirm, Modal, Button } from "antd";
import ModalInfo from "./Modal_InfoUser";

function List_Order() {
  const [listOrder, setListOrder] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [info_User, setInfoUser] = useState([]);
  const [id_Order, setIdOrder] = useState("");

  useEffect(() => {
    getData();
  }, []);

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

  const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${month} - ${day} - ${year}`;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
    getData();
  };

  const getUser = async (info) => {
    setIdOrder(info.id);
    let info_User = await getUserById(info.idKH);
    if (info_User) {
      setInfoUser(info_User);
      showModal();
    }
  };

  const columns = [
    {
      title: "Mã đơn hàng",
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
      title: "Duyệt đơn hàng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              getUser(record);
            }}
          >
            <i class="fa-solid fa-boxes-packing"></i>           
          </button>
          Xem chi tiết
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>DANH SÁCH ĐƠN HÀNG ĐANG CHỜ DUYỆT</h1>
      <Table dataSource={listOrder} columns={columns} />;
      <ModalInfo
        showInfo={isModalOpen}
        closeInfo={handleCancel}
        info_User={info_User}
        info_Order={id_Order}
      />
    </>
  );
}

export default List_Order;
