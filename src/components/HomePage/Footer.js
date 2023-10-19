import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="content">
            <ul className="TongDai">
              <li>TỔNG ĐÀI</li>
              <li>Gọi mua: <span style={{color: "#ffcb05"}}> 0393921810</span></li>
              <li>Khiếu nại<span style={{color: "#ffcb05"}}> 0393921810</span></li>
              <li>Liên hệ với chúng tôi</li>
              <li><a href="https://www.facebook.com/anhti2312/" style={{color:"#fff"}}><i class="fa-brands fa-facebook fa-lg"></i></a> <span style={{margin: "0px 40px 0px 40px"}}><i class="fa-brands fa-instagram fa-lg"></i></span> <i class="fa-brands fa-tiktok fa-lg"></i></li>
            </ul>
            <ul className="HeThong">
              <li>HỆ THỐNG THUỐC</li>
              <li>Hệ thống 10 nhà thuốc</li>
              <li>Nội quy nhà thuốc</li>
              <li>Chất lượng phục vụ</li>
              <li>Chính sách đổi trả</li>
            </ul>
            <ul className="HoTro">
              <li>HỖ TRỢ KHÁCH HÀNG</li>
              <li>Hướng dẫn mua hàng online</li>
              <li>Chính sách giao hàng</li>
              <li>Chính sách thanh toán</li>
              <li>Lịch sử đơn hàng</li>
            </ul>
            <ul className="NhaThuoc">
              <li>VỀ NHÀ THUỐC QUANG PHÚC</li>
              <li>Giới thiệu công ty</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Thông tin dược sĩ</li>
              <li>Các loại hoạt chất</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
