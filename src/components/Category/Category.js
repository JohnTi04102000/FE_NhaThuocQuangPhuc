import React from "react";
import "./Category.scss";

const Category = () => {

  return (
    <>
      <div className="category">
        <div className="Thuoc">
          Thuốc <i className="fa-solid fa-tablets"></i>
          <div className="Thuoc-Item">
            <ul>
              <li>Tim mạch</li>
              <li>Huyết áp</li>
              <li>Thần kinh</li>
              <li>Xương khớp</li>
              <li>Tiêu hoá</li>
              <li>Da liễu</li>
            </ul>
          </div>
        </div>
        <div className="TPCN">
          Thực phẩm chức năng <i className="fa-solid fa-prescription-bottle"></i>
          <div className="TPCN-Item">
            <ul>
              <li>Bổ gan</li>
              <li>Bổ não</li>
              <li>Kẹo ngậm</li>
              <li>Bổ phế</li>
              <li>Dầu cá</li>
              <li>Vitamin</li>
            </ul>
          </div>
        </div>
        <div className="DCYT">
          Dụng cụ y tế <i className="fa-solid fa-stethoscope"></i>
          <div className="DCYT-Item">
            <ul>
              <li>Miếng dán hạ sốt</li>
              <li>Khẩu trang</li>
              <li>Nhiệt kế</li>
              <li>Máy đo huyết áp</li>
              <li>Kit test covid</li>
              <li>Nước muối - Bông gòn</li>
            </ul>
          </div>
        </div>
        <div className="MyPham">
          Mỹ Phẩm <i className="fa-solid fa-hockey-puck"></i>
          <div className="MyPham-Item">
            <ul>
              <li>Dưỡng da</li>
              <li>Dưỡng môi</li>
              <li>Kem chống nắng</li>
              <li>Son dưỡng</li>
              <li>Mặt nạ</li>
              <li>Tẩy trang</li>
            </ul>
          </div>
        </div>
        <div className="CSCN">
          Chăm sóc cá nhân{" "}
          <i className="fa-solid fa-prescription-bottle-medical"></i>
          <div className="CSCN-Item">
            <ul>
              <li>Chăm sóc răng miệng</li>
              <li>Chăm sóc mắt</li>
              <li>Chăm sóc tay chân</li>
              <li>Dầu gió</li>
              <li>Gội, dưỡng xả</li>
              <li>Bao cao su - Gel</li>
            </ul>
          </div>
        </div>
        <div className="CSTE">
          Chăm sóc trẻ em <i className="fa-solid fa-baby"></i>
          <div className="CSTE-Item">
            <ul>
              <li>Khẩu trang cho bé</li>
              <li>Phấn thơm</li>
              <li>Sữa bột</li>
              <li>Dầu gội</li>
              <li>Tinh dầu</li>
              <li>Khen ướt</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
