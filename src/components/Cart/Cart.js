import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { toast } from "react-toastify";
import { Button } from "antd";


function Cart(props) {
  const [listCart, setListCart] = useState([]);



  useEffect(() => {
    const fetchCartFromLocalStorage = () => {
      try {
        let carts = localStorage.getItem("carts");
        if (carts) {
          let parsedCarts = JSON.parse(carts);
          setListCart(parsedCarts);
        } else {
          toast.info("Giỏ hàng trống!");
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchCartFromLocalStorage();
  }, []);

  const formatCurrency = (price) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    return formatter.format(price);
  };

  const removeAllCart = () => {
    localStorage.removeItem("carts");
    setListCart([]);
    toast.info("Giỏ hàng trống!");
  };

  const addProduct = (product) => {
    try {
      let carts = localStorage.getItem("carts");
      if (carts) {
        let parsedCarts = JSON.parse(carts);
        parsedCarts.push(product);
        setListCart(parsedCarts);
        localStorage.setItem("carts", JSON.stringify(parsedCarts));
      } else {
        toast.info("Giỏ hàng trống!");
      }
    } catch (e) {
      console.log(e);
    }
    props.cartCount();
  };

  const removeProduct = (product) => {
    try {
      let carts = localStorage.getItem("carts");
      if (carts) {
        let parsedCarts = JSON.parse(carts);
        for (var i = parsedCarts.length - 1; i >= 0; i--) {
          if (parsedCarts[i]["id"] === product.id) {
            parsedCarts.splice(i, 1);
            break;
          }
        }
        setListCart(parsedCarts);
        localStorage.setItem("carts", JSON.stringify(parsedCarts));
      } else {
        toast.info("Giỏ hàng trống!");
      }
    } catch (e) {
      console.log(e);
    }
    props.cartCount();
  };

  // Trước khi render
  const uniqueItems = [];
  let total = 0;

  // Loại bỏ các sản phẩm trùng lặp theo id
  listCart.forEach((item) => {
    total += item.price;
    const existingItem = uniqueItems.find(
      (uniqueItem) => uniqueItem.id === item.id
    );
    if (!existingItem) {
      uniqueItems.push(item);
    }
  });

  return (
    <>
      <div className="info-cart">
        <div className="remove-cart btn btn-info">
          <Button variant="contained" onClick={removeAllCart}>
            <strong>Xoá giỏ hàng</strong> &nbsp; <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
        <div className="list-cart">
          <h4>
            Tổng Tiền: <span className="total">{formatCurrency(total)}</span>
          </h4>
          {listCart.length > 0 ? (
            uniqueItems.map((item, index) => (
              <div key={index} id={item.id} className="cart-item">
                <img
                  src={"http://localhost:8080/image/" + item.img}
                  height={100}
                  width={100}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-title">
                  {item.TenSanPham}
                </div>
                <br />
                <div className="card-total">
                  <i
                    class="fa-solid fa-circle-minus"
                    onClick={() => removeProduct(item)}
                  ></i>
                  Tổng:{" "}
                  {
                    listCart.filter((cartItem) => cartItem.id === item.id)
                      .length
                  }
                  <i
                    class="fa-solid fa-circle-plus"
                    onClick={() => addProduct(item)}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <p>Giỏ hàng trống!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
