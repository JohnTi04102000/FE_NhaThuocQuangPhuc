import React, { useEffect, useState } from "react";
import { getAllProduct, updateProductByID } from "../../../service/ProductService";
import { Table, Space, Popconfirm, Tag } from "antd";
import './List_Product.scss';
import DrawerUpdateProduct from "./DrawerUpdateProduct";
import { toast } from "react-toastify";

function List_Product() {
  const [listProduct, setListProduct] = useState([]);
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let list = await getAllProduct();
      if (list) {
        setListProduct(list);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProduct = (id) =>{

  }

  const handleUpdateProduct = async (id, data) => {
    try{
      let result = await updateProductByID(id, data);
      if(result)
      {
        toast.success(result.message);
        getProduct()
      }
    }
    catch(err){
      console.log(err);
    }
  }


  const currentProduct = (product) => {
    setProduct(product);
    showDrawer();
    console.log('Product', product)
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "TenSanPham",
      key: "TenSanPham",
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      key: "price",
    },
    {
      render: (_, { tags }) => (
        <>
          {tags &&
            tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="btn-edit" onClick={() => {
                  currentProduct(record);
                }}>
              <i
                class="fa-solid fa-pencil"             
              ></i>
            </button>
            <Popconfirm
              title="Xoá sản phẩm"
              description="Bạn có chắc là muốn xoá sản phẩm này"
              onConfirm={() => {
                handleDeleteProduct(record.id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn-delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>DANH SÁCH SẢN PHẨM</h1>
      <Table columns={columns} dataSource={listProduct} />;
      <DrawerUpdateProduct
      openDrawer={open}
      closeDrawer={onClose}
      infoProduct={product}
      handleUpdate={handleUpdateProduct}
      />
    </>
  );
}

export default List_Product;
