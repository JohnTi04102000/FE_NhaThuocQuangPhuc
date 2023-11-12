import React, { useEffect, useState } from "react";
import "./Home_Header.scss";
import logoImg from "../../assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import Category from "../Category/Category";
import Carousel from "../HomePage/Carousel";
import Product from "../Product/Product";
import Cart from '../Cart/Cart';
import { Button, Drawer, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomeHeader() {
  const [cartCount, setCartCount] = useState(0);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const dataRedux = useSelector(state => state.category.count);

  
  useEffect(() => {
    handleCartCount();
  }, [dataRedux]);
  
  const handleCartCount = () => {
    setCartCount(dataRedux);
    // const count = localStorage.getItem("carts");
    // if (count) {
    //   const parsedCarts = JSON.parse(count);
    //   const cartCount = parsedCarts.length;
    //   setCartCount(cartCount);
    // }
  }

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleParamUpdate = (newParamValue) => {
    // Thay đổi giá trị của `paramName` trong URL và chuyển hướng
    navigate(`?value=${newParamValue}`);
  }

  return (
    <>
      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li
                className="header__navbar-item header__navbar-item-separate"
                style={{ transform: "translateX(-40%)" }}
              >
                Chào mừng đến với Nhà Thuốc Quang Phúc
              </li>
              <li
                className="header__navbar-item"
                style={{ transform: "translateX(-20%)" }}
              >
                Kết nối với chúng tôi
                <a
                  href="https://www.facebook.com/anhti2312/"
                  className="header__navbar-icon"
                >
                  <i className="fa-brands fa-facebook fa-xl"></i>
                </a>
              </li>
            </ul>

            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-icon">
                <i className="fa-regular fa-bell fa-xl"></i>
                <span className="none-hover">Thông báo</span>
              </li>
              <li className="header__navbar-item header__navbar-icon">
                <i className="fa-regular fa-circle-question fa-xl"></i>
                <span className="none-hover">Trợ giúp</span>
              </li>
              <li className="header__navbar-item">Đăng kí</li>
              <li className="header__navbar-item">Đăng nhập</li>
            </ul>
          </nav>
          <div className="header_search">
            <div className="header_search-logo">
              <NavLink to="/" className="nav-link">
                <img src={logoImg} alt="Logo" />
              </NavLink>
            </div>
            <div className="header_search-banner">
              <h1>Quang Phuc</h1>
              <h2>Pharmacity</h2>
            </div>
            <div className="header_search-input">
              <Input placeholder="Tìm theo bệnh, tên thuốc,..." onChange={(event) => setValue(event.target.value)}/>
              <button className="header_search_button" onClick={() => {handleParamUpdate(value)}}>
                <i className="fa-solid fa-magnifying-glass"></i>
                Tìm
              </button>
            </div>
            <div className="header_search-cart">
              <div className="cart" onClick={showLargeDrawer}>
                <div id="cartCount" ></div>
                <i
                  className="fa-sharp fa-solid fa-cart-plus"
                  style={{ marginRight: "7px" }}                
                ></i>
                {cartCount}   
                &nbsp; 
                Giỏ hàng       
              </div>
            </div>
          </div>
        </div>
      </header>
      <Category></Category>
      <Carousel></Carousel>
      <Product
      cartCount={handleCartCount}
      ></Product>
      <Drawer
        title={'Thông tin giỏ hàng'}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Cart
        cartCount={handleCartCount}
        ></Cart>
      </Drawer>
    </>
  );
}

export default HomeHeader;
