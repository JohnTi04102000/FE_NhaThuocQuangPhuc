import React, { useState, useEffect } from "react";
import { getAllOrderAccept } from "../../../service/OrderService";
import { Table, Tag, Space, Popconfirm } from "antd";
import { updateOrderComplete } from "../../../service/OrderService";
import { toast } from "react-toastify";

function List_Order() {
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getAllOrderAccept();
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

  const handleUpdateOrder = async (id_Order, id_User) => {
    console.log(id_Order, id_User);
    let result = await updateOrderComplete(id_User, id_Order);
    if (result) { 
      toast.success("Cập nhật trạng thái đơn hàng thành công!");
      getData();
    }
  }

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
      key: "trangThai"
    },
    {
      title: "Giao thành công",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
              title="Giao dịch đơn hàng"
              description="Xác nhận đã giao đơn hàng này thành công"
              onConfirm={() => {
                handleUpdateOrder(record.id, record.idKH);
              }}
              okText="Yes"
              cancelText="No"
            >
              <button >
              <i class="fa-solid fa-truck-fast"></i>
              </button>
            </Popconfirm>
            Cập nhật
        </Space>
      ),
    },
  ];

  return (
    <>
        <h1>DANH SÁCH ĐƠN HÀNG ĐÃ DUYỆT</h1>
      <Table dataSource={listOrder} columns={columns} />;
    </>
  );
}

export default List_Order;
