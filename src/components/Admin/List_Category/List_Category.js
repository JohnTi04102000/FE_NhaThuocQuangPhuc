import React, { useState, useEffect } from "react";
import { getAllCategory } from "../../../service/CategoryService";
import { Table, Tag, Space, Popconfirm} from "antd";
import './List_Category.scss'
import {getCategoryById, updateCategoryById} from '../../../service/CategoryService'
import ModalUpdateCategory from './ModalUpdateCategory';
import { toast } from "react-toastify";

function List_Category() {
  const [listCategory, setListCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCategory, setIdCategory] = useState(null);
  const [nameCategory, setNameCategory] = useState(null);

  useEffect(() => {
    getCategory();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getCategory = async () => {
    try {
      let list = await getAllCategory();
      if (list) {
        setListCategory(list);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateCategory = async (id, data) => {
    try{
      let result = await updateCategoryById(id, data);
      if(result)
      {
        toast.success(result.message);
        getCategory();
        handleCancel();
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  const currentCategory = async (id) =>
  {
    showModal();
    try{
      let category = await getCategoryById(id);
      if(category)
      {
        setIdCategory(category[0].id);
        setNameCategory(category[0].name);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Danh mục",
      dataIndex: "name",
      key: "name",
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
                  currentCategory(record.id);
                }}>
              <i
                class="fa-solid fa-pencil"             
              ></i>
            </button>
          </Space>
      ),
    },
  ];

  return (
    <>
      <h1>DANH MỤC SẢN PHẨM</h1>
      <Table dataSource={listCategory} columns={columns} />;
      <ModalUpdateCategory 
      showCategory={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
      idCategory={idCategory}
      nameCategory={nameCategory}
      handleUpdate={handleUpdateCategory}
      />
    </>
  );
}

export default List_Category;
