import React from "react";
import "./Category.scss";
import {
  changeCategory
} from '../../redux/Actions/categoryAction'
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Category = (props) => {
  // const changeCategory = () => {
  //   props.changeCategory();
  // }

  const navigate = useNavigate();
  const handleParamUpdate = (newParamValue) => {
    // Thay đổi giá trị của `paramName` trong URL và chuyển hướng
    navigate(`?iddm=${newParamValue}`);
  }
  return (
    <>
      <div className="category">
        <div className="Thuoc">
        Thực phẩm chức năng <i className="fa-solid fa-tablets"></i>
          <div className="Thuoc-Item">
            <ul>           
              {/* <li onClick={() => changeCategory()}>Tim mạch</li> */}
              <li onClick={() => handleParamUpdate(1)}>Tim mạch</li>
              <li onClick={() => handleParamUpdate(2)}>Bổ gan</li>
              <li onClick={() => handleParamUpdate(3)}>Bổ não</li>
              <li onClick={() => handleParamUpdate(4)}>Bổ phế, hô hấp</li>
              <li onClick={() => handleParamUpdate(5)}>Hỗ trợ xương khớp</li>
              <li onClick={() => handleParamUpdate(6)}>Hổ trợ tiêu hoá</li>
              <li onClick={() => handleParamUpdate(7)}>Kẹo ngậm - Viên ngậm</li>
              <li onClick={() => handleParamUpdate(8)}>Làm đẹp</li>
              <li onClick={() => handleParamUpdate(9)}>Dầu cá - Bổ mắt</li>
              <li onClick={() => handleParamUpdate(10)}>Vitamin và khoáng chất</li>
              <li onClick={() => handleParamUpdate(11)}>Thảo dược tự nhiên</li>
            </ul>
          </div>
        </div>
        <div className="DCYT">
          Thiết bị y tế <i className="fa-solid fa-stethoscope"></i>
          <div className="DCYT-Item">
            <ul>
              <li onClick={() => handleParamUpdate(14)}>Miếng dán hạ sốt</li>
              <li onClick={() => handleParamUpdate(17)}>Khẩu trang</li>
              <li onClick={() => handleParamUpdate(16)}>Các loại que thử</li>
              <li onClick={() => handleParamUpdate(15)}>Bông gòn - Băng gạc</li>
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

const mapStateToProps = state => {
  return {
    category: state.category.category,
  }
}

const mapDispatchToProps = dispatch => {
  return {

    changeCategory: () => dispatch(changeCategory()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
