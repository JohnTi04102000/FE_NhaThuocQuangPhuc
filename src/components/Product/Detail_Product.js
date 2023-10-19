import React, { useEffect, useState } from "react";
import "./Detail_Product.scss";
import { getProductById } from "../../service/ProductService";
import { Image, Button, Space } from "antd";

function DetailProduct(props) {
  const [infoProduct, setInfoProduct] = useState([]);

  useEffect(() => {
    const getDetailProduct = async () => {
      const productId = props.id;
      try {
        const product = await getProductById(productId);
        if (product) {
          setInfoProduct(product);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    getDetailProduct();
  }, [props.id]);

  return (
    <>
      <div className="detail-product">
        <div className="left-detail">
          {infoProduct.map((item) => (
            <Image src={`http://localhost:8080/image/${item.img}`} key={item.id} />
          ))}
        </div>
        <div className="right-detail">
          {infoProduct.map((item) => (
            <div className="info-product" key={item.id}>
              <div className="name-product">{item.TenSanPham}</div>
              <div className="price-product">
                <p>
                  Giá: {item.price}
                  <span className="price-underline">vnđ</span>
                </p>
                <Space wrap>
                  <Button type="primary">{item.CachDongGoi}</Button>
                </Space>
              </div>
              <div className="other-detail">
                <div>
                  <b>Công dụng: </b>
                  {item.CongDung}
                </div>
                <div>
                  <b>Thương hiệu: </b>
                  {item.ThuongHieu}
                </div>
                <div>
                  <b>Hãng sản xuất: </b>
                  {item.NhaSanXuat}
                </div>
                <div>
                  <b>Nơi sản xuất: </b>
                  {item.NoiSanXuat}
                </div>
                <div>
                  <b>Dạng bào chế: </b>
                  {item.DangBaoChe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
