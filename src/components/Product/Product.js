import React, { useEffect, useState } from "react";
import "./Product.scss";
import {
  getAllProduct,
  getProductByCategory,
  getProductBySearch
} from "../../service/ProductService";
import { toast } from "react-toastify";
import Footer from "../HomePage/Footer";
import { NavLink } from "react-router-dom";
import { getProductById } from "../../service/ProductService";
import { Button, Modal } from "antd";
import Detail_Product from "./Detail_Product";
// import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import {
  increaseCounter,
  decreaseCounter,
} from '../../redux/Actions/categoryAction';
import { connect } from "react-redux";
import { Pagination } from 'antd';

function Product(props) {
  const [listProduct, setListProduct] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [infoProduct, setInfoProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [id_Product, setId] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const iddm = params.get("iddm"); 
  const value = params.get("value");

  useEffect(() => {
    if (iddm) {
      showProductsByCategory(iddm);
    }
    else if (value) {
      showProductsBySearch(value);
    }
     else {
      showAllProduct();
    }
  }, [iddm, value]);

  const handleOpen = (id_Product) => {
    setOpen(true);
    setId(id_Product);
  };

  const showAllProduct = async () => {
    try {
      const listPro = await getAllProduct();
      setListProduct(listPro);
    } catch (error) {
      toast.error("Error loading products.");
    }
  };

  const showProductsByCategory = async (id) => {
    try {
      const listPro = await getProductByCategory(id);
      console.log(listPro);
      setListProduct(listPro.data);
    } catch (error) {
      toast.error("Error loading products.");
    }
  };
  const showProductsBySearch = async (value) => {
    try {
      const listPro = await getProductBySearch(value);
      console.log(listPro);
      setListProduct(listPro);
    } catch (error) {
      toast.error("Error loading products.");
    }
  };
  const handleAddCart = (product) => {
    const checkCart = localStorage.getItem("carts");
    let cartTmp = [];
    console.log(props);
    toast.success("Đã thêm sản phẩm vào giỏ hàng!");

    if (checkCart) {
      cartTmp = JSON.parse(checkCart);
      cartTmp.push(product);
      setListCart(cartTmp);
      localStorage.setItem("carts", JSON.stringify(cartTmp));
    } else {
      let cartTmp = listCart.slice();
      cartTmp.push(product);
      setListCart(cartTmp);
      localStorage.setItem("carts", JSON.stringify(cartTmp));
    }
    props.cartCount();
    props.increaseCounter();
  };

  const formatCurrency = (price) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    return formatter.format(price).replace("₫", "");
  };

  // const handleDetail = async (id_Item) => {
  //   try{
  //     let product  = await getProductById(id_Item);
  //     if (product) {
  //       setInfoProduct(product);
  //     }
  //   }
  //   catch(err){
  //     toast.error(err.message);
  //   }
  // }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = listProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Hàm chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="title-product">
        <i className="fa-solid fa-list"></i> Danh sách sản phẩm{" "}
      </div>
      <div className="list-product">
        <div className="container-product">
          {currentProducts.map((item) => (
            <div className="card" id={item.id}>
              <img
                src={"http://localhost:8080/image/" + item.img}
                height="auto"
                width={100}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title">{item.TenSanPham}</h5>
              <p className="card-text">{item.CongDung}</p>
              <p>
                Giá bán:{" "}
                <b className="card-price">
                  {formatCurrency(item.price)}
                  <span className="card-vnd">vnđ</span>
                </b>
              </p>
              <div className="button-container">
                <button
                  className="btn-detail"
                  onClick={() => handleOpen(item.id)}
                >
                  Xem chi tiết
                </button>

                <button
                  className="btn-addCart"
                  onClick={() => handleAddCart(item)}
                >
                  Chọn mua
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title="Thông tin chi tiết sản phẩm"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Detail_Product id={id_Product} />
      </Modal>
      <Pagination defaultCurrent={1} />;
      {/* <Pagination
        productsPerPage={productsPerPage}
        totalProducts={listProduct.length}
        currentPage={currentPage}
        paginate={paginate}
      /> */}
      <Footer />
    </>
  );
}
const mapStateToProps = state => {
  return {
    count: state.category.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

