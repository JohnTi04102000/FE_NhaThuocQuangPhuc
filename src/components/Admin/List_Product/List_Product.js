import React, { useEffect, useState } from "react";
import { getAllProduct, updateProductByID, deleteProductByID, createProduct, uploadFile } from "../../../service/ProductService";
import { Table, Space, Popconfirm, Tag, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import './List_Product.scss';
import DrawerUpdateProduct from "./DrawerUpdateProduct";
import DrawerCreateProduct from "./DrawerCreateProduct";
import { toast } from "react-toastify";

function List_Product() {
  const [listProduct, setListProduct] = useState([]);
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const showDrawerCreate = () => {
    setOpenCreate(true);
  };
  const onClose = () => {
    setOpen(!open);
  };

  const onCloseCreate = () => {
    setOpenCreate(!openCreate);
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

  const handleDeleteProduct = async (id) =>{
    try{
      let result = await deleteProductByID(id);
      if(result) {
        toast.success(result.message);
        getProduct();
      }
    }
    catch(err) {
      console.error(err);
    }
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

  const handleCreateProduct = async (data) => {
    showDrawerCreate();
    try{
      let result = await createProduct(data);
      if(result)
      {
        toast.success("Thêm sản phẩm thành công");
        getProduct()
      }
      else
      {
        toast.error("Thêm sản phẩm thất bại")
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const handleUploadFile = async (data) => {
    const file = data;
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image-product", file);
    await uploadFile(formData);
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
      <Button type="primary" onClick={showDrawerCreate} icon={<PlusOutlined />}>
        Thêm sản phẩm
      </Button>
      <Table columns={columns} dataSource={listProduct} />;
      <DrawerUpdateProduct
      openDrawer={open}
      closeDrawer={onClose}
      infoProduct={product}
      handleUpdate={handleUpdateProduct}
      />
      <DrawerCreateProduct
      openDrawerCreate={openCreate}
      closeDrawerCreate={onCloseCreate}
      handleCreate={handleCreateProduct}
      uploadFile={handleUploadFile}
      />
    </>
  );
}

export default List_Product;
