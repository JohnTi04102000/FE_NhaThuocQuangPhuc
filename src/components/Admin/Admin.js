import React, { useState } from "react";
import "./Admin.scss";
import logo from "../../assets/image/logo.svg";
import {
  SettingOutlined,
  BarChartOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import List_Category from "./List_Category/List_Category";
import List_Product from "./List_Product/List_Product";
import List_Order from "./List_Order/ListOrder";
import Order_Accept from "./List_Order/Order_Accept";
import Order_NotAccept from "./List_Order/Order_NotAccept";
import Order_Complete from "./List_Order/Order_Complete";
import { NavLink } from "react-router-dom";
import PrivatePage from "../HOC/PrivatePage";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Quản lí danh mục", "sub1", <BarChartOutlined />, [
    getItem(<div>Danh sách danh mục</div>, "1"),
    getItem(<div>Calendar</div>, "2"),
    getItem(<div>Assigned Asssets</div>, "3"),
    getItem(<div>Assigned Work Order</div>, "4"),
    getItem(<div>Assigned Work Request</div>, "5"),
  ]),
  getItem("Quản lí sản phẩm", "sub2", <DatabaseOutlined />, [
    getItem(<div>Danh sách sản phẩm</div>, "6"),
    getItem(<div>Schedule Maintenance</div>, "7"),
    getItem(<div>Task Group</div>, "8"),
    getItem(<div>Project</div>, "9"),
  ]),
  {
    type: "divider",
  },
  getItem("Quản lí đơn hàng", "sub4", <ShoppingCartOutlined />, [
    getItem(<div>Danh sách đơn hàng</div>, "10"),
    getItem(<div>Đơn hàng chờ duyệt</div>, "11"),
    getItem(<div>Đơn hàng đã duyệt</div>, "12"),
    getItem(<div>Đơn hàng đã giao</div>, "13"),
  ]),
  {
    type: "divider",
  },
  getItem(
    "Exit",
    "grp",
    <SettingOutlined />,
    [
      getItem(
        <NavLink to="/logout" className="dropdown-item">
          Logout
        </NavLink>,
        "13"
      ),
    ],
    "group"
  ),
];

function Dashboard() {
  const [displayedComponent, setDisplayedComponent] = useState(0);

  const onClick = (e) => {
    //console.log("click ", e.key);
    changeDashboard(e.key);
  };

  const changeDashboard = (component) => {
    setDisplayedComponent(component);
  };

  let contentToDisplay;

  switch (displayedComponent) {
    case "1":
      contentToDisplay = <List_Category />;
      break;
    case "6":
      contentToDisplay = <List_Product />;
      break;
    case "10":
      contentToDisplay = <List_Order />;
      break;
    case "11":
      contentToDisplay = <Order_NotAccept />;
      break;
    case "12":
      contentToDisplay = <Order_Accept />;
      break;
    case "13":
      contentToDisplay = <Order_Complete />;
      break;
    default:
      contentToDisplay = <List_Category />;
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="db-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <div>
            <Menu
              onClick={onClick}
              style={{
                width: 256,
              }}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className="dashboard-content">{contentToDisplay}</div>
      </div>
    </>
  );
}

export default PrivatePage(Dashboard);
